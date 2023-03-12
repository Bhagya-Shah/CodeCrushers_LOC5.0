// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO-T2gqK5AgGWt3-EZV3U5J05zAZTPIqw",
  authDomain: "web-notification-code.firebaseapp.com",
  projectId: "web-notification-code",
  storageBucket: "web-notification-code.appspot.com",
  messagingSenderId: "527513068865",
  appId: "1:527513068865:web:56f64f81903ddb4bfc2dc0",
  measurementId: "G-840K0QR34W"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const messaging = getMessaging(app);