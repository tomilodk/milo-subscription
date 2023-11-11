import admin from 'firebase-admin';

export const firebase = admin.initializeApp({
  credential: admin.credential.cert(
    {
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }
  ),
});
