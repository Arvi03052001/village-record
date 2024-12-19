import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlNBmyTu3qBuVfFlv0jWGHBT79HhA2Wso",
  authDomain: "village-milk-84aee.firebaseapp.com",
  projectId: "village-milk-84aee",
  storageBucket: "village-milk-84aee.firebasestorage.app",
  messagingSenderId: "570353989678",
  appId: "1:570353989678:web:cb5e25f606ebe3c37c47bf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);