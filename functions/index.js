const functions = require('firebase-functions');
const cors = require('cors');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.myFn = functions.https.onRequest((req, res) => {
  console.log("hit this");
  return cors(req, res, () => {
    // ...
    console.log("inside cors");
    res.send(200);
  });
});
