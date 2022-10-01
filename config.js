import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDrZl2fBrrqli4p-s2_eCCEghDZhJCiNYM",
  authDomain: "cooking-app-56cdb.firebaseapp.com",
  projectId: "cooking-app-56cdb",
  storageBucket: "cooking-app-56cdb.appspot.com",
  messagingSenderId: "354241604361",
  appId: "1:354241604361:web:2611ab88cd4668b73601d8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
