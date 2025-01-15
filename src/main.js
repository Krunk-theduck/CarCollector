/* Import firebase */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAT8lAk-MzVwnSdSyu8dZhCuuNUDkhaq0o",
  authDomain: "car-collectors-49072.firebaseapp.com",
  projectId: "car-collectors-49072",
  storageBucket: "car-collectors-49072.firebasestorage.app",
  messagingSenderId: "94851011167",
  appId: "1:94851011167:web:3866a680a9d5046fe7c1ea",
  measurementId: "G-B3WRJXQQ0G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

/* Begin Helpers */
function gel(id) {
    return document.getElementById(id);
}

/* Begin Game */

function signupWithEmailAndPassword(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully created
        const user = userCredential.user;
        console.log("User created:", user);
        // Redirect to a welcome page or dashboard
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
        // Display an error message to the user
      });
  }
  function signInWithEmailAndPassword(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Redirect to the user's dashboard or other protected area
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
        // Display an error message to the user
      });
  }
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      console.log("User is signed in:", user);
      // Redirect to the user's dashboard or other protected area
    } else {
      // User is signed out
      console.log("User is signed out");
      // Redirect to the login page
    }
  });

/* Begin DOM */
gel("signUp").onsubmit = signupWithEmailAndPassword(gel("email").value, gel("password").value);
