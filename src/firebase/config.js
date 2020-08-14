import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCE6MM2nfSf0rfzV3oxAzNMGd0Rz1qNuso",
  authDomain: "photo-gallery-a6fa6.firebaseapp.com",
  databaseURL: "https://photo-gallery-a6fa6.firebaseio.com",
  projectId: "photo-gallery-a6fa6",
  storageBucket: "photo-gallery-a6fa6.appspot.com",
  messagingSenderId: "598622006482",
  appId: "1:598622006482:web:6947df627abc15afb3510b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const photoStorage = firebase.storage();
const photoFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 
export { photoStorage, photoFirestore, timestamp };
