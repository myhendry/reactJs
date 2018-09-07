import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();

// const settings = {
//   timestampsInSnapshots: true
// };

// firestore.settings(settings);

// import firebase from "firebase";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD564gkWOpSYks8wxOmWNwGsG-555uvBDg",
//   authDomain: "test-3babb.firebaseapp.com",
//   databaseURL: "https://test-3babb.firebaseio.com",
//   projectId: "test-3babb",
//   storageBucket: "test-3babb.appspot.com",
//   messagingSenderId: "911931804634"
// };

// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// const settings = {
//   timestampsInSnapshots: true
// };

// firestore.settings(settings);

// export default firebase;
