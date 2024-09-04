// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDAX6eEEh4_DUjBXfLhQAuBFRZmCnVO9aU",
  authDomain: "by-way-4a22c.firebaseapp.com",
  projectId: "by-way-4a22c",
  storageBucket: "by-way-4a22c.appspot.com",
  messagingSenderId: "1083403399112",
  appId: "1:1083403399112:web:8ca198ec8b4a1af50d1afd"
};

// mport { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
}

const firebaseApp = initializeApp(FIREBASE_CONFIG)

// export const auth = getAuth(firebaseApp)

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}