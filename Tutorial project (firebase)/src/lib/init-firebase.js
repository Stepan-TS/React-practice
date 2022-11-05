// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDfrvdy_UeTrRzmBZos1pQiSI1y5fq8e5k",
  authDomain: "react-firebase-tutorial-215aa.firebaseapp.com",
  projectId: "react-firebase-tutorial-215aa",
  storageBucket: "react-firebase-tutorial-215aa.appspot.com",
  messagingSenderId: "587723872963",
  appId: "1:587723872963:web:fa1f24569dc43d4ea2e076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);