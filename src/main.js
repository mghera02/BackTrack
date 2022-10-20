import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/* code from our Firebase console */    
  const firebaseConfig = {
    apiKey: "AIzaSyCJ6I84Z6c4AzIr8oaM8rWLYGtQR76yjOs",
    authDomain: "backtrack-27d37.firebaseapp.com",
    projectId: "backtrack-27d37",
    storageBucket: "backtrack-27d37.appspot.com",
    messagingSenderId: "931390678684",
    appId: "1:931390678684:web:055ed4f2196575f4d26f59",
    measurementId: "G-G0WK5D6HDQ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
