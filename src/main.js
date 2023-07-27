import { createApp } from 'vue';
import App from './App.vue';
import router from '@/scripts/router.js'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBb0mVODIamNQaCZMx0CDpIWb4Ugq405Uo",
    authDomain: "webrtc-47c22.firebaseapp.com",
    projectId: "webrtc-47c22",
    storageBucket: "webrtc-47c22.appspot.com",
    messagingSenderId: "215643730650",
    appId: "1:215643730650:web:7b184380cf73641316ebe3",
    measurementId: "G-MC2S3V2588"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

createApp(App).use(router).mount('#app');
