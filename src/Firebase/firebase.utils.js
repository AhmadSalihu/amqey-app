  import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2dr3SyNonx-xUvfssZFRpcjberd-sCW8",
  authDomain: "testing-e-commerce-76673.firebaseapp.com",
  projectId: "testing-e-commerce-76673",
  storageBucket: "testing-e-commerce-76673.appspot.com",
  messagingSenderId: "48115713409",
  appId: "1:48115713409:web:7ed5f0872eb19c0e6d9480",
  measurementId: "G-3Q5LKHKHSW"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if (!userAuth)
    return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.messaege)
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;