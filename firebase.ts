// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3mRAbuzB2kElpTxL37dlJ3US0qZtGiBc",
  authDomain: "notion-clone-d6e9f.firebaseapp.com",
  projectId: "notion-clone-d6e9f",
  storageBucket: "notion-clone-d6e9f.firebasestorage.app",
  messagingSenderId: "906768200216",
  appId: "1:906768200216:web:f61c734b4c002a430bc96d",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
