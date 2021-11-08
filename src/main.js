import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import firebase from "firebase/app";
import "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_apiKey,
  authDomain: process.env.VUE_APP_FIREBASE_authDomain,
  projectId: process.env.VUE_APP_FIREBASE_projectId,
  storageBucket: process.env.VUE_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.VUE_APP_FIREBASE_messagingSenderId,
  appId: process.env.VUE_APP_FIREBASE_appId,
  measurementId: process.env.VUE_APP_FIREBASE_measurementId
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App).mount('#app');
    