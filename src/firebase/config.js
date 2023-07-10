// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM6vHxFn9baDVzJGMXi7zEw4xGsFpSIVA",
  authDomain: "tiendita-react.firebaseapp.com",
  projectId: "tiendita-react",
  storageBucket: "tiendita-react.appspot.com",
  messagingSenderId: "828912783730",
  appId: "1:828912783730:web:02600d6b0102df45244deb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);