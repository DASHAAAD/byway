import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyDAX6eEEh4_DUjBXfLhQAuBFRZmCnVO9aU",
  authDomain: "by-way-4a22c.firebaseapp.com",
  databaseURL: "https://by-way-4a22c-default-rtdb.firebaseio.com",
  projectId: "by-way-4a22c",
  storageBucket: "by-way-4a22c.firebasestorage.app",
  messagingSenderId: "1083403399112",
  appId: "1:1083403399112:web:8ca198ec8b4a1af50d1afd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)


