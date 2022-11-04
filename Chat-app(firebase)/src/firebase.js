import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASnMOwp4Ocs0uxtxCIA2wQu2qMAGNJxOI",
  authDomain: "chat-a1990.firebaseapp.com",
  projectId: "chat-a1990",
  storageBucket: "chat-a1990.appspot.com",
  messagingSenderId: "668107813497",
  appId: "1:668107813497:web:26dc4b80589ba89ced9aa8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();