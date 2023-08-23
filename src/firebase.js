import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAU1wHUAANJ3QzUSq40KOutBtwKLP7pzf0",
  authDomain: "disney-7a649.firebaseapp.com",
  projectId: "disney-7a649",
  storageBucket: "disney-7a649.appspot.com",
  messagingSenderId: "966387926107",
  appId: "1:966387926107:web:9edc6e2d3934d35c53ab7e",
  measurementId: "G-DQ1N79MJ29"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;