// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRYdL2ocxw3e6X4oMSMpBThUQ7ky2-_vA",
  authDomain: "estate-2ace9.firebaseapp.com",
  projectId: "estate-2ace9",
  storageBucket: "estate-2ace9.appspot.com",
  messagingSenderId: "231426619595",
  appId: "1:231426619595:web:27efec086f1bbbd9a1034e",
  measurementId: "G-7KKQXSVVD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);