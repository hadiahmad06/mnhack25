// src/firebase-config.ts
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage'; // Firebase Storage module

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;