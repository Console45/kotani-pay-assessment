const firebase = require("firebase/compat/app");
require("firebase/compat/auth");
require("firebase/compat/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAYyxIgmv4UT86KTzuaXURl12KC6Q7HS5s",
  authDomain: "kotanipay-assessment.firebaseapp.com",
  projectId: "kotanipay-assessment",
  storageBucket: "kotanipay-assessment.appspot.com",
  messagingSenderId: "78856096386",
  appId: "1:78856096386:web:7d17e6c1794de779d4c29b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

module.exports = { firebase };
