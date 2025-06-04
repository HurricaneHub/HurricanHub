const admin = require('firebase-admin');
const serviceAccount = require('../firebaseServiceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;


// to access the service account, you will need to add the content for firebaseServiceAccount.json
