// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcz3G7uWlWW3dhEuGmrn6u6_7tb9KMnCM",
  authDomain: "ecom-dash-53c9b.firebaseapp.com",
  projectId: "ecom-dash-53c9b",
  storageBucket: "ecom-dash-53c9b.appspot.com",
  messagingSenderId: "720870507579",
  appId: "1:720870507579:web:ebe096d6e5b5233ed3481e"
};

initializeApp(firebaseConfig);

// Initialize Provider
const provider = new GoogleAuthProvider();

// Initialize a reference to our auth object
const auth = getAuth();

function login(){
    return signInWithPopup(auth, provider);
}

function logout(){
    return signOut(auth);
}

export {auth, login, logout, onAuthStateChanged }