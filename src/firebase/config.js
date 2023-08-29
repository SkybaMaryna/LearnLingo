import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDZAfSau2P6MrNmkKgR4WhiDlqFHQwbGqc",
    authDomain: "learnlingo-5b2ab.firebaseapp.com",
    projectId: "learnlingo-5b2ab",
    storageBucket: "learnlingo-5b2ab.appspot.com",
    messagingSenderId: "448455028967",
    appId: "1:448455028967:web:63e9e1ae964bfe0120b242"
  };

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);