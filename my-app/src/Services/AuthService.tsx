// src/services/AuthService.ts
import firebase from 'firebase/app';
import 'firebase/auth'; // Import Firebase Authentication

// Ensure Firebase is initialized
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

interface AuthService {
  signUp(email: string, password: string): Promise<firebase.auth.UserCredential>;
  signIn(email: string, password: string): Promise<firebase.auth.UserCredential>;
  signOut(): Promise<void>;
  getCurrentUser(): firebase.User | null;
}

class AuthServiceImpl implements AuthService {
  async signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async signOut(): Promise<void> {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getCurrentUser(): firebase.User | null {
    return firebase.auth().currentUser;
  }
}

const AuthService = new AuthServiceImpl();
export default AuthService;