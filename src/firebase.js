import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDiRZc6Zc0IQOq_odnscD0blIgo34Z4h4E",
  authDomain: "clone-577a5.firebaseapp.com",
  databaseURL: "https://clone-577a5.firebaseio.com",
  projectId: "clone-577a5",
  storageBucket: "clone-577a5.appspot.com",
  messagingSenderId: "105496029416",
  appId: "1:105496029416:web:6b19b97bb0a51d59a3815d"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};