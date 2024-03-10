// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxRQ9kv1_px_9Q3hJ-sfTX-brUAfhxVB0",
  authDomain: "myproject-e0290.firebaseapp.com",
  projectId: "myproject-e0290",
  storageBucket: "myproject-e0290.appspot.com",
  messagingSenderId: "494456658484",
  appId: "1:494456658484:web:7801557d033a32f8d54861",
  measurementId: "G-CMDC7F493Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);