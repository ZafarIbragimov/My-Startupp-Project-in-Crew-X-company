import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import admin from './firebaseConfig';

// Firebase Auth funksiyalarini qo'shish (masalan, ID tokenni tekshirish)
const idToken = 'YOUR_ID_TOKEN';

admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log(`User ID: ${uid}`);
    })
    .catch((error) => {
        console.error('Invalid token', error);
    });

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
