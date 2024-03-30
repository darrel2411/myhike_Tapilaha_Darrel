//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDxdCk37aYLwlBs9CmSAWyliS8_fBG3Cvk",
    authDomain: "comp1800-2024-833ab.firebaseapp.com",
    projectId: "comp1800-2024-833ab",
    storageBucket: "comp1800-2024-833ab.appspot.com",
    messagingSenderId: "540055574743",
    appId: "1:540055574743:web:d2442ad430ce2b53c43892"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
