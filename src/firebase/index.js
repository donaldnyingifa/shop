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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    //console.log(firestore.doc('users/72W6Np90fSlfobiy3Jjj'))
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    console.log(snapShot);
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promp: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;