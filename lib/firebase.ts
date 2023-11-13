import admin, { apps } from 'firebase-admin';


export const firebase = () => {
  const base64ServiceAccount = process.env.ENCODED_GOOGLE_SERVICE_ACCOUNT;
  const serviceAccount = JSON.parse(Buffer.from(base64ServiceAccount!, 'base64').toString('ascii'));

  if (apps.length > 0 && apps[0]) {
    return apps[0];
  } else {
    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
} 
