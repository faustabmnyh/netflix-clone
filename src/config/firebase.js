import firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAk2vwp2viD4JZbkdDd7fF7iv9_Eb6xu6s",
    authDomain: "netflix-clone-fac58.firebaseapp.com",
    databaseURL: "https://netflix-clone-fac58.firebaseio.com",
    projectId: "netflix-clone-fac58",
    storageBucket: "netflix-clone-fac58.appspot.com",
    messagingSenderId: "306766480364",
    appId: "1:306766480364:web:43462466f0ca1f3a99b6c9",
    measurementId: "G-7ZK4PEQCNL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth, firebaseApp };