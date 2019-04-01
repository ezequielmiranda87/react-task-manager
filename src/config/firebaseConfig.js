import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBp4eLn2__p9rI6jVX6eyJVOjGJoJmcUhU",
    authDomain: "react-task-manager-8f1dd.firebaseapp.com",
    databaseURL: "https://react-task-manager-8f1dd.firebaseio.com",
    projectId: "react-task-manager-8f1dd",
    storageBucket: "react-task-manager-8f1dd.appspot.com",
    messagingSenderId: "493483207393"
  };
  firebase.initializeApp(config);
  
  export default firebase;