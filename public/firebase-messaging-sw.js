importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js",
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyB_3uRoK93RWav_Ay-X5u804OLqWIbX3nQ",
  authDomain: "event-management-269db.firebaseapp.com",
  projectId: "event-management-269db",
  storageBucket: "event-management-269db.firebasestorage.app",
  messagingSenderId: "418935857119",
  appId: "1:418935857119:web:27e1cb34d0070e32706e6a",
});

const messaging = firebase.messaging();
