import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwc2Vqxsfw9TqTqJYuc67s0WBMRb5zNZ8",
    authDomain: "clone-8e7f7.firebaseapp.com",
    databaseURL: "https://clone-8e7f7.firebaseio.com",
    projectId: "clone-8e7f7",
    storageBucket: "clone-8e7f7.appspot.com",
    messagingSenderId: "813686976206",
    appId: "1:813686976206:web:dce397537ce05d9913ea9f"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};