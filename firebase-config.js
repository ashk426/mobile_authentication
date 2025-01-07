// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdDnyiEZS8CjojjxLcI0OJ3dOMFBuUJXA",
    authDomain: "mobile-number-validation-1f621.firebaseapp.com",
    projectId: "mobile-number-validation-1f621",
    storageBucket: "mobile-number-validation-1f621.firebasestorage.app",
    messagingSenderId: "196838331394",
    appId: "1:196838331394:web:1b2bf1da5776f6e2d6431b",
    measurementId: "G-LQ4YRPD2MH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize reCAPTCHA verifier
const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  size: 'invisible',  // Invisible reCAPTCHA
  callback: function(response) {
    console.log("reCAPTCHA verified successfully");
  }
}, auth);

export { auth, recaptchaVerifier };
