// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfZqkMci_RE7cAmJyqp3ma3NAz-lgi6N4",
  authDomain: "preppilot-907ad.firebaseapp.com",
  projectId: "preppilot-907ad",
  storageBucket: "preppilot-907ad.firebasestorage.app",
  messagingSenderId: "496391007266",
  appId: "1:496391007266:web:3d0aa60417f9bcbfceae7b",
  measurementId: "G-48FHR5L713"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)