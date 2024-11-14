// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'

// const FIREBASE_CONFIG = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   appId: process.env.REACT_APP_FIREBASE_ID,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// }

// const firebaseApp = initializeApp(FIREBASE_CONFIG)

// export const auth = getAuth(firebaseApp)


import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);