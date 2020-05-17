import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQ1TJqbRnqvuYqbyjU8B03b5qYKkamEso",
    authDomain: "knowit-c489a.firebaseapp.com",
    databaseURL: "https://knowit-c489a.firebaseio.com",
    projectId: "knowit-c489a",
    storageBucket: "knowit-c489a.appspot.com",
    messagingSenderId: "558212989689",
    appId: "1:558212989689:web:77458fc3ca9d4da628d828",
    measurementId: "G-M18PBFEW9C"
  };
    firebase.initializeApp(firebaseConfig);
   
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();