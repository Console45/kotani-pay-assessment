/* eslint-disable */
const functions = require("firebase-functions");
const express = require("express");
const { firebase } = require("./firebase");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

app.post("/api/login", async function login(req, res) {
  await firebase
    .auth()
    .signInWithEmailAndPassword(req.body.email, req.body.password);
  res.send({
    message: "Logged in successfully",
  });
});

app.post("/kyc/user/create", async function createUser(req, res) {
  const userRef = firebase.firestore().collection("users");
  console.log(userRef);
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password);
  const uid = response.user.uid;
  const data = {
    id: uid,
    dateOfBirth: req.body.dateOfBirth,
    idNumber: req.body.idNumber,
    email: req.body.email,
  };
  await userRef.doc(uid).set(data);
  res.send({
    message: "User created successfully",
  });
});

exports.api_v2 = functions.https.onRequest(app);
