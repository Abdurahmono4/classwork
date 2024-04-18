// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADp913PY5antSpD4Ccnsnkfid7yB4GIyY",
  authDomain: "my-kitchen-a73b3.firebaseapp.com",
  projectId: "my-kitchen-a73b3",
  storageBucket: "my-kitchen-a73b3.appspot.com",
  messagingSenderId: "3138935247",
  appId: "1:3138935247:web:74a75d1ac8700d6f2edaba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//auth
export const auth =