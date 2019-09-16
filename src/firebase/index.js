import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnHIVicQXICLrMIbAL_wKeap7N2wwJ4m0",
    authDomain: "crwn-db-15885.firebaseapp.com",
    databaseURL: "https://crwn-db-15885.firebaseio.com",
    projectId: "crwn-db-15885",
    storageBucket: "",
    messagingSenderId: "264586995961",
    appId: "1:264586995961:web:6018ae10128417eeed1a28"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promp: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;