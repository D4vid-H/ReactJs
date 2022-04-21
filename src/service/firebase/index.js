// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo-rvUJJ7GeBLL4UTCZ5MuqARMPXSv9Bs",
  authDomain: "masala-49152.firebaseapp.com",
  projectId: "masala-49152",
  storageBucket: "masala-49152.appspot.com",
  messagingSenderId: "308447642647",
  appId: "1:308447642647:web:5fbf1aa91e745f61334852",
  measurementId: "G-K7ZKDYXE56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export const firestoreDb = getFirestore(app);