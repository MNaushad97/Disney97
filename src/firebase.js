//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

/*the belove chunk of firebaseconfig data is extracted from firebase->disney97->projectSetting */
const firebaseConfig = {
  apiKey: "AIzaSyDlTelk9afMv8HSlikiJ4ve82PFkwxo23U",
  authDomain: "disney97-1205e.firebaseapp.com",
  projectId: "disney97-1205e",
  storageBucket: "disney97-1205e.appspot.com",
  messagingSenderId: "335836924002",
  appId: "1:335836924002:web:f3ec0e7f6fb5017778693b",
  measurementId: "G-EZFN0WQQTM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
