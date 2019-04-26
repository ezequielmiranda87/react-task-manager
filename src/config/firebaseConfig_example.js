import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
  var config = {
    /**
     * Your App configuration
     */
  };
  firebase.initializeApp(config);
  
  export default firebase;

