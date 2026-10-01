// Blocks until production is serving the content in this checkout.
//
// Pushing to main starts a Vercel build, and the build finishes some time
// before the production alias is promoted to it. Announcing a post in that gap
// is what used to send push notifications pointing at a 404.
//
// public/content-index.json ships inside the deployment, so the live copy is a
// direct statement of which content production is currently serving.
//
// Waiting for every slug to appear used to be enough, but that check was blind
// to edits: changing an existing post adds no slug, so the PREVIOUS deployment
// already satisfied it and this returned in seconds against stale content.
// Harmless alone, since syncContent only notifies for slugs it has never seen,
// but a commit that edited one post and added another could sync and notify
// the new one against the old deployment. Compare contentRev instead, and fall
// back to the slug report only for deployments built before it existed.
const path = require('path');
const {
  SITE_URL,
  collectContent,
  contentRev,
} = require('../src/lib/contentIndex');

// Generous enough for a slow build plus alias promotion; the job fails loudly
// rather than silently syncing against a stale deployment.
const TIMEOUT_MS = 10 * 60 * 1000;
const POLL_INTERVAL_MS = 15 * 1000;

const key = (item) => `${item.type}/${item.slug}`;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchLiveIndex() {
  // Cache-bust so a CDN edge cannot hand back the previous deployment's copy.
  const response = await fetch(
    `${SITE_URL}/content-index.json?t=${Date.now()}`,
    {
      redirect: 'follow',
      headers: { 'Cache-Control': 'no-cache' },
    }
  );

  if (!response.ok) {
    throw new Error(`content-index.json returned HTTP ${response.status}`);
  }

  const body = await response.json();
  if (!Array.isArray(body.items)) {
    throw new Error('content-index.json has no items array');
  }

  return {
    contentRev: typeof body.contentRev === 'string' ? body.contentRev : null,
    keys: new Set(body.items.map(key)),
  };
}

async function main() {
  const root = path.join(__dirname, '..');
  const expected = collectContent(root).map(key);
  const expectedRev = contentRev(root);
  const deadline = Date.now() + TIMEOUT_MS;

  console.log(
    `Waiting for contentRev ${expectedRev} (${expected.length} item(s)) on ${SITE_URL}`
  );

  while (Date.now() < deadline) {
    try {
      const live = await fetchLiveIndex();

      if (live.contentRev === expectedRev) {
        console.log("Production is serving this commit's content.");
        return;
      }

      if (live.contentRev === null) {
        // Expected exactly once: the deploy that first ships contentRev is
        // still being promoted over one built before the field existed.
        console.log(
          'Live deployment predates contentRev - waiting for the new build'
        );
      } else {
        const missing = expected.filter((item) => !live.keys.has(item));
        console.log(
          missing.length === 0
            ? `Serving contentRev ${live.contentRev}, want ${expectedRev} - an edit is still being promoted`
            : `Not live yet - waiting on ${missing.length}: ${missing.slice(0, 3).join(', ')}`
        );
      }
    } catch (error) {
      console.log(`${error.message} - retrying`);
    }

    await sleep(POLL_INTERVAL_MS);
  }

  console.error(
    'Timed out waiting for the deployment. Nothing was synced, so no notification was sent; re-run this job once the deploy is live.'
  );
  process.exit(1);
}

main();
