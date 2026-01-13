/* eslint-disable @typescript-eslint/no-var-requires */
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin
function initializeFirebase() {
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
  return admin;
}

// Read views data
const VIEWS_DATA_PATH = path.join(__dirname, '..', 'data', 'initial-views.json');
const viewsData = JSON.parse(fs.readFileSync(VIEWS_DATA_PATH, 'utf-8'));

// Main function
async function importViews() {
  try {
    console.log('Initializing Firebase...');
    initializeFirebase();

    console.log(`Importing ${Object.keys(viewsData).length} view entries...\n`);

    const db = admin.firestore();
    const batch = db.batch();
    let batchCount = 0;
    const BATCH_SIZE = 500; // Firestore batch limit

    for (const [viewKey, views] of Object.entries(viewsData)) {
      const viewsRef = db.collection('views').doc(viewKey);

      // Parse type and slug from key (format: "type_slug")
      const [type, ...slugParts] = viewKey.split('_');
      const slug = slugParts.join('_');

      // Set the document with initial view count
      batch.set(
        viewsRef,
        {
          count: views,
          type,
          slug,
          lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      batchCount++;

      // Commit batch if we reach the limit
      if (batchCount >= BATCH_SIZE) {
        await batch.commit();
        console.log(`Committed batch of ${batchCount} entries`);
        batchCount = 0;
      }
    }

    // Commit remaining entries
    if (batchCount > 0) {
      await batch.commit();
      console.log(`Committed final batch of ${batchCount} entries`);
    }

    console.log(`\n✅ Successfully imported ${Object.keys(viewsData).length} view entries to Firebase!`);
    console.log(`Total views imported: ${Object.values(viewsData).reduce((a, b) => a + b, 0)}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error importing views:', error);
    process.exit(1);
  }
}

importViews();
