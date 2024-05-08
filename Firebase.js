// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2SyKgAbQQ9PbUDnkBPXbKrkzKPI2f80k",
  authDomain: "proswipe-8bc20.firebaseapp.com",
  projectId: "proswipe-8bc20",
  storageBucket: "proswipe-8bc20.appspot.com",
  messagingSenderId: "592159663792",
  appId: "1:592159663792:web:da8c21dae0eb655d77fd75",
  measurementId: "G-KHD749750Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);