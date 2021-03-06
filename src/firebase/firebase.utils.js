import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBV1N0tcm7JaFIYGQ0XlQLoy7CcPaYsdn0",
    authDomain: "crwn-db-2b3e4.firebaseapp.com",
    projectId: "crwn-db-2b3e4",
    storageBucket: "crwn-db-2b3e4.appspot.com",
    messagingSenderId: "266621430971",
    appId: "1:266621430971:web:a06cb5108722ff282a0d9e",
    measurementId: "G-FXZ8KV7TQC"
  };

  export const createUserProfileDocument = async (userAuth) => {
    if(!userAuth) return ;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email, 
          createdAt
        })
      }catch (error) {
        console.log('error creating user' , error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;