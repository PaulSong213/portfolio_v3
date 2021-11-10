import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { initializeApp, getApps, getApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDkBlBSjL0J-9xJptIj36gnqpAr_wA4mS0",
  authDomain: "portfolio-b2b99.firebaseapp.com",
  projectId: "portfolio-b2b99",
  storageBucket: "portfolio-b2b99.appspot.com",
  messagingSenderId: "749070364633",
  appId: "1:749070364633:web:4aab6730f44b336a4e73c8",
  measurementId: "G-DDGQ6J88E7"
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

createApp(App).mount('#app');
    