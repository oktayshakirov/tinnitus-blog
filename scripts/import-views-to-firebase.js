const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// Initialize Firebase Admin
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

// Parse view key to extract type and slug
function parseViewKey(viewKey) {
  const parts = viewKey.split('_');
  if (parts.length < 2) {
    throw new Error(`Invalid view key format: ${viewKey}`);
  }
  const type = parts[0];
  const slug = parts.slice(1).join('_'); // In case slug contains underscores
  return { type, slug };
}

async function importViews() {
  try {
    // Read the views.json file
    const viewsFilePath = path.join(__dirname, '../data/views.json');
    const viewsData = JSON.parse(fs.readFileSync(viewsFilePath, 'utf8'));

    const viewsRef = admin.firestore().collection('views');
    const batch = admin.firestore().batch();
    let batchCount = 0;
    const BATCH_LIMIT = 500; // Firestore batch limit

    let totalProcessed = 0;
    let totalSuccess = 0;
    let totalErrors = 0;

    console.log(`Starting import of ${Object.keys(viewsData).length} views...\n`);

    for (const [viewKey, count] of Object.entries(viewsData)) {
      try {
        const { type, slug } = parseViewKey(viewKey);
        const docRef = viewsRef.doc(viewKey);

        // Set the document with the view count
        batch.set(
          docRef,
          {
            count: count,
            type: type,
            slug: slug,
            lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );

        batchCount++;
        totalProcessed++;

        // Firestore has a limit of 500 operations per batch
        if (batchCount >= BATCH_LIMIT) {
          await batch.commit();
          console.log(`Committed batch of ${batchCount} views`);
          batchCount = 0;
        }
      } catch (error) {
        console.error(`Error processing view key "${viewKey}":`, error.message);
        totalErrors++;
      }
    }

    // Commit any remaining operations
    if (batchCount > 0) {
      await batch.commit();
      console.log(`Committed final batch of ${batchCount} views`);
      totalSuccess = totalProcessed - totalErrors;
    }

    console.log('\n=== Import Summary ===');
    console.log(`Total views processed: ${totalProcessed}`);
    console.log(`Successfully imported: ${totalSuccess}`);
    console.log(`Errors: ${totalErrors}`);
    console.log('\nImport completed!');
  } catch (error) {
    console.error('Error importing views:', error);
    process.exit(1);
  }
}

// Run the import
importViews()
  .then(() => {
    console.log('\nScript finished successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
