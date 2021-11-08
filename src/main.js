import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBBp1hP0ALFxzkJLaqIzrs2TOxmqQczbwE",
  authDomain: "portfolio-ebe1c.firebaseapp.com",
  databaseURL: "https://portfolio-ebe1c-default-rtdb.firebaseio.com",
  projectId: "portfolio-ebe1c",
  storageBucket: "portfolio-ebe1c.appspot.com",
  messagingSenderId: "588011148251",
  appId: "1:588011148251:web:e5214a946d191b78934dfe",
  measurementId: "G-2DHE0G2DE1"
};

initializeApp(firebaseConfig);

createApp(App).mount('#app');
    