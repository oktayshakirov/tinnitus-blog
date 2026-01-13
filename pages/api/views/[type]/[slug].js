import admin from 'firebase-admin';

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

function getViewKey(type, slug) {
  return `${type}_${slug}`;
}

export default async function handler(req, res) {
  const { type, slug } = req.query;

  if (!type || !slug) {
    return res.status(400).json({ error: 'Type and slug are required' });
  }

  const viewKey = getViewKey(type, slug);
  const viewsRef = admin.firestore().collection('views').doc(viewKey);

  try {
    if (req.method === 'GET') {
      const doc = await viewsRef.get();
      const count = doc.exists ? doc.data().count || 0 : 0;
      return res.status(200).json({ views: count });
    } else if (req.method === 'POST') {
      await viewsRef.set(
        {
          count: admin.firestore.FieldValue.increment(1),
          type,
          slug,
          lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      const doc = await viewsRef.get();
      const count = doc.data()?.count || 0;
      return res.status(200).json({ views: count });
    } else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error with views API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
