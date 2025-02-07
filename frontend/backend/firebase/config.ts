

// backend/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDlrXe3fnMsoHAnkdaqvpCMxoLLavQa0LY",
    authDomain: "wildtracker-438e0.firebaseapp.com",
    projectId: "wildtracker-438e0",
    storageBucket: "wildtracker-438e0.firebasestorage.app",
    messagingSenderId: "103186647108",
    appId: "1:103186647108:web:693f36f2d11cedfb1c5411"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };