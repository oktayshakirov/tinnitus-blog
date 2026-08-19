// Mirrors published content into Firestore, which is what makes the mobile app
// send a "New Post" push notification.
//
// It runs from .github/workflows/notify-new-content.yml on push to main, and
// can also be run by hand from a checkout (`npm run sync-content`) once a
// deploy is live.
//
// There is no other writer. An earlier version of this comment described a
// scheduled reconciler in the app that polls
// https://www.tinnitushelp.me/content-index.json as a backstop - it was never
// built, so if this script does not run for a piece of content, that content
// never reaches Firestore and never notifies. Keep the workflow's `paths:`
// filter in step with every section in src/lib/contentIndex.js.
//
// It deliberately does NOT run during `next build`. Creating the Firestore
// document is what fires the notification, and during a build the deployment is
// not live yet, so the notification would link to a page that still 404s.
const path = require('path');
const admin = require('firebase-admin');
const { collectContent, parsePublishedAt } = require('../src/lib/contentIndex');

if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (
    !process.env.FIREBASE_PROJECT_ID ||
    !process.env.FIREBASE_CLIENT_EMAIL ||
    !privateKey
  ) {
    throw new Error(
      'Missing Firebase credentials. Please set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables.'
    );
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey,
    }),
  });
}

// Only content published within this window is eligible for a push
// notification. Backdating a post past this window publishes it silently.
const NOTIFY_WINDOW_MS = 48 * 60 * 60 * 1000;

// Gives a just-finished deploy time to be promoted before we announce it.
const LIVE_CHECK_DELAYS_MS = [0, 5000, 10000, 15000, 30000];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Polls `url` until it responds 200. Returns false once attempts are exhausted.
 *
 * The URL checked is the same one the Cloud Function puts in the notification
 * payload, so a pass means the exact link the user will tap is live.
 */
async function isLive(url) {
  for (const delay of LIVE_CHECK_DELAYS_MS) {
    if (delay > 0) {
      await sleep(delay);
    }

    try {
      const response = await fetch(url, { redirect: 'follow' });
      if (response.ok) {
        return true;
      }
      console.log(`Live check for ${url}: HTTP ${response.status}, retrying`);
    } catch (error) {
      console.log(`Live check for ${url} failed: ${error.message}, retrying`);
    }
  }

  return false;
}

async function run() {
  const db = admin.firestore();
  const items = collectContent(path.join(__dirname, '..'));

  // One read per collection tells us which slugs already exist. Anything
  // already present is updated in place, which never fires onDocumentCreated
  // and therefore never notifies - that is what makes retitling safe.
  const existingByType = new Map();
  for (const type of new Set(items.map((item) => item.type))) {
    const snapshot = await db.collection(type).get();
    const ids = new Set();
    snapshot.forEach((doc) => ids.add(doc.id));
    existingByType.set(type, ids);
  }

  for (const item of items) {
    const isNew = !existingByType.get(item.type).has(item.slug);
    const publishedAt = parsePublishedAt(item.date);
    const isRecent =
      publishedAt !== null &&
      Date.now() - publishedAt.getTime() <= NOTIFY_WINDOW_MS;

    // A new, recent item is the one case that sends a push. Hold it back until
    // its page is reachable rather than writing it with `notify: false`: the
    // flag is only ever set on creation, so a silent write would permanently
    // suppress the notification. Skipping leaves the slug absent so a later run
    // - or the app's reconciler - still picks it up and notifies exactly once.
    if (isNew && isRecent && !(await isLive(item.url))) {
      console.warn(
        `Skipping "${item.slug}" - ${item.url} is not live yet. Re-run once the deploy has finished.`
      );
      continue;
    }

    const payload = {
      title: item.title,
      slug: item.slug,
      syncedAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    if (publishedAt) {
      payload.publishedAt = admin.firestore.Timestamp.fromDate(publishedAt);
    }

    // notify is only ever set on creation. Updating an existing document
    // leaves the flag untouched so a resync cannot re-notify.
    if (isNew) {
      payload.notify = isRecent;
    }

    try {
      await db.collection(item.type).doc(item.slug).set(payload, {
        merge: true,
      });

      if (isNew) {
        console.log(
          isRecent
            ? `Added "${item.slug}" (will notify)`
            : `Added "${item.slug}" (silent - published ${item.date || 'unknown'})`
        );
      } else {
        console.log(`Updated "${item.slug}"`);
      }
    } catch (error) {
      console.error(`Error syncing "${item.slug}":`, error.message);
    }
  }
}

run()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error processing content:', error);
    process.exit(1);
  });
