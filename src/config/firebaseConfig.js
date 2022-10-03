// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyBbXUboiy-J1Zv7lj-KzXpvS2nCPSFHBtU",
    authDomain: "sneakers-c914a.firebaseapp.com",
    projectId: "sneakers-c914a",
    storageBucket: "sneakers-c914a.appspot.com",
    messagingSenderId: "117262625876",
    appId: "1:117262625876:web:93f15a92074fc092f751c1"
})

export default app;
export const auth = getAuth(app);


