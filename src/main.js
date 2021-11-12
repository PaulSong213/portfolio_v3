import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { initializeApp, getApps, getApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_apiKey,
  authDomain: process.env.VUE_APP_FIREBASE_authDomain,
  projectId: process.env.VUE_APP_FIREBASE_projectId,
  storageBucket: process.env.VUE_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.VUE_APP_FIREBASE_messagingSenderId,
  appId: process.env.VUE_APP_FIREBASE_appId,
  measurementId: process.env.VUE_APP_FIREBASE_measurementId
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

createApp(App).mount('#app');
    