// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANQTBh7E1saNhWUgbOxpu4u01yLB-8st4",
  authDomain: "bd-tik-tok-clone.firebaseapp.com",
  projectId: "bd-tik-tok-clone",
  storageBucket: "bd-tik-tok-clone.appspot.com",
  messagingSenderId: "578095522684",
  appId: "1:578095522684:web:613dd07daad510c0a97af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;