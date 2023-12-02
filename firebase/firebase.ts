// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { type } from 'os';

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,  
//   appId: process.env.APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCfF-q_uNmxfiyiXQR-oO9VyOL54dNp6kE",
  authDomain: "gametownstage.firebaseapp.com",
  projectId: "gametownstage",
  storageBucket: "gametownstage.appspot.com",
  messagingSenderId: "814734444453",
  appId: "1:814734444453:web:556f62666cfdad1943ca4c",
  measurementId: "G-3YCP7YT21F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export type FirebaseUser = User;
