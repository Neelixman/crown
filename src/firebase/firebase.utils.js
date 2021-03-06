import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0zcLODPKd5D7X9fh0I8g8igQ9g43KIoE",
  authDomain: "my-project-1516406686503.firebaseapp.com",
  projectId: "my-project-1516406686503",
  storageBucket: "my-project-1516406686503.appspot.com",
  messagingSenderId: "208723948056",
  appId: "1:208723948056:web:f8ffcc027d3a15f2b1c96d",
  measurementId: "G-55PBMD7R8Y"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
