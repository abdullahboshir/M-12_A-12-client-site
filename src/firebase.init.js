// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnkz4qI0o0WIQ4G8Ns7IwVs2x-NN6cyt8",
  authDomain: "parts-zone.firebaseapp.com",
  projectId: "parts-zone",
  storageBucket: "parts-zone.appspot.com",
  messagingSenderId: "659488906826",
  appId: "1:659488906826:web:c536883c52fa60c8bed0b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;