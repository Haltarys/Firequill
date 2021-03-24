import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyDM2XfGXD9Nq4MGJpwipI-VedGrGHo8zhw',
  authDomain: 'firequill-5b86e.firebaseapp.com',
  projectId: 'firequill-5b86e',
  storageBucket: 'firequill-5b86e.appspot.com',
  messagingSenderId: '901451991144',
  appId: '1:901451991144:web:cf079a1f319e37d1d753dd',
  measurementId: 'G-8ECSEG4VN3',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
