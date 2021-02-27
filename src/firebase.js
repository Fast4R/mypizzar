import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD07k72jkf_lnEvTI87Z9S9kyK9ceG2wxc",
    authDomain: "mypizzar.firebaseapp.com",
    projectId: "mypizzar",
    storageBucket: "mypizzar.appspot.com",
    messagingSenderId: "805977970581",
    appId: "1:805977970581:web:61b4248ed4fb4fc0a5489c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;