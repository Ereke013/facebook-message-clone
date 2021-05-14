import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeF3nm6jcn7tF_VUADdzym40olq6sRT5A",
  authDomain: "facebook-messenger-clone-3e0c9.firebaseapp.com",
  projectId: "facebook-messenger-clone-3e0c9",
  storageBucket: "facebook-messenger-clone-3e0c9.appspot.com",
  messagingSenderId: "190143972394",
  appId: "1:190143972394:web:c67a8205d2285891396f53",
  measurementId: "G-Q2JGYHYS63",
});

const db = firebase.firestore();
export default db;
