import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUbwYHoyYeO0cHSctzUcFpVL1TTa9bYR4",
  authDomain: "crown-db-70c49.firebaseapp.com",
  projectId: "crown-db-70c49",
  storageBucket: "crown-db-70c49.appspot.com",
  messagingSenderId: "324560650995",
  appId: "1:324560650995:web:45f8e83721169ccc17ad86",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;