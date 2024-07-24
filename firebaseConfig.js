const admin = require('firebase-admin');
const serviceAccount = require('./path/to/startup-db72a-firebase-adminsdk-v3byf-f4e50e584e.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
