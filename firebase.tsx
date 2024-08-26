import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: process.env.DB_APIKEY,
  authDomain:  process.env.DB_AUTHDOMAIN,
  databaseURL: process.env.DB_DATABESEURL,
  projectId: process.env.DB_PROJECTID,
  storageBucket: process.env.DB_STORAGEBUCKET,
  messagingSenderId: process.env.DB_MESSAGINSENDERID,
  appId: process.env.DB_APPID,
  measurementId: process.env.DB_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)