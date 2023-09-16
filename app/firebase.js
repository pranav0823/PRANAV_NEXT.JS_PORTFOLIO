// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC38nKXwhomo_M1ZONrRzbhx2o7VebPULs",
  authDomain: "portfolio-project-13aaf.firebaseapp.com",
  projectId: "portfolio-project-13aaf",
  storageBucket: "portfolio-project-13aaf.appspot.com",
  messagingSenderId: "296382475944",
  appId: "1:296382475944:web:1964fb2b342e09d44c5c9d",
  measurementId: "G-GMH5TCRM2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);