import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  
  apiKey: "AIzaSyCUkMzddhP-5Ebkz9PvtZVan7hlqG3Zo9s",
  authDomain: "gprofund.firebaseapp.com",
  projectId: "gprofund",
  storageBucket: "gprofund.appspot.com",
  messagingSenderId: "103703986769",
  appId: "1:103703986769:web:b8a4a3407ccaa480782e70"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);