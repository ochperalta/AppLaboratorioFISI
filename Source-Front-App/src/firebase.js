// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDOQunAJ0BTWcPkSU3luRniMYm8qrh_Lk",
  authDomain: "laboratorios-fisi.firebaseapp.com",
  projectId: "laboratorios-fisi",
  storageBucket: "laboratorios-fisi.appspot.com",
  messagingSenderId: "446715000462",
  appId: "1:446715000462:web:d46f1288285b9bfa4efbdf",
  measurementId: "G-QXYQ6RNQNP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
