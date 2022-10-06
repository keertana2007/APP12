import firebase from "firebase";


  
const firebaseConfig = {
  apiKey: "AIzaSyAxY9mZgF7lNDKVCzja5ujhUKTf_b_1FrA",
  authDomain: "capp-30b59.firebaseapp.com",
  projectId: "capp-30b59",
  storageBucket: "capp-30b59.appspot.com",
  messagingSenderId: "306275312509",
  appId: "1:306275312509:web:08e3c7a5bd7006531a6214",
  measurementId: "G-ZLE4SMCCVQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
