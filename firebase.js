// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAX6eEEh4_DUjBXfLhQAuBFRZmCnVO9aU",
  authDomain: "by-way-4a22c.firebaseapp.com",
  projectId: "by-way-4a22c",
  storageBucket: "by-way-4a22c.appspot.com",
  messagingSenderId: "1083403399112",
  appId: "1:1083403399112:web:8ca198ec8b4a1af50d1afd"
};

// Initialize Firebase

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}
const app = initializeApp(firebaseConfig);