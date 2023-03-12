importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCO-T2gqK5AgGWt3-EZV3U5J05zAZTPIqw",
    authDomain: "web-notification-code.firebaseapp.com",
    projectId: "web-notification-code",
    storageBucket: "web-notification-code.appspot.com",
    messagingSenderId: "527513068865",
    appId: "1:527513068865:web:56f64f81903ddb4bfc2dc0",
    measurementId: "G-840K0QR34W"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationBody = payload.notification.body;
  const notificationOptions = {
    body: payload.notification.body,
    title: payload.notification.title,
  };
//   alert(notificationOptions.body);

  self.registration.showNotification(notificationTitle, notificationOptions);
});