// src/firebaseConfig.js
import { firebase } from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDwQcHza6iCBh1__AzHU_4V0V6NyeujU4U',
    authDomain: 'pethub-c7b7e.firebaseapp.com',
    projectId: 'pethub-c7b7e',
    storageBucket: 'pethub-c7b7e.appspot.com',
    messagingSenderId: '473208483707',
    appId: '1:473208483707:android:52bc8970a9ab497c0057de',
};

if (!firebase.apps.length) {
    console.log("Initializing Firebase...");
    firebase.initializeApp(firebaseConfig);
} else {
    console.log("Firebase app already initialized.");
}