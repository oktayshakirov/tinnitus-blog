import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type, title } = req.body;

  if (!type || !title) {
    return res.status(400).json({ error: 'Missing type or title' });
  }

  if (!['posts', 'sounds'].includes(type)) {
    return res
      .status(400)
      .json({ error: "Invalid type. Must be 'posts' or 'sounds'." });
  }

  try {
    await admin.firestore().collection(type).add({
      title,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return res.status(200).json({ message: 'Content added successfully' });
  } catch (error) {
    console.error('Error adding content:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
