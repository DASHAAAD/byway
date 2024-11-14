import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAX6eEEh4_DUjBXfLhQAuBFRZmCnVO9aU",
  authDomain: "by-way-4a22c.firebaseapp.com",
  databaseURL: "https://by-way-4a22c-default-rtdb.firebaseio.com",
  projectId: "by-way-4a22c",
  storageBucket: "by-way-4a22c.firebasestorage.app",
  messagingSenderId: "1083403399112",
  appId: "1:1083403399112:web:8ca198ec8b4a1af50d1afd"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
// Initialize Firebase


