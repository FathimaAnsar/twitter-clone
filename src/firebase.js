import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxndNKfmfFutNIxZCMIHVma9RW6f_fVTk",
    authDomain: "twitter-clone-edf4c.firebaseapp.com",
    projectId: "twitter-clone-edf4c",
    storageBucket: "twitter-clone-edf4c.appspot.com",
    messagingSenderId: "534369430876",
    appId: "1:534369430876:web:59690cfe81461895d7e599",
    measurementId: "G-VXJFMXENZR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  export default db;