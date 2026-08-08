// This file MUST be uploaded to the SAME folder as index.html, with this EXACT name.
// It lets push notifications show up even when the app is closed.

importScripts('https://www.gstatic.com/firebasejs/12.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.15.0/firebase-messaging-compat.js');

// 👉 YAHAN WAHI FIREBASE CONFIG PASTE KARO JO index.html MEIN DAALA THA (bilkul same)
firebase.initializeApp({
  apiKey: "AIzaSyCj3S8M-tkqhpS_ZCCJHynB_oB-GSgYzWQ",
  authDomain: "edu-ai-pro-365e2.firebaseapp.com",
  projectId: "edu-ai-pro-365e2",
  storageBucket: "edu-ai-pro-365e2.firebasestorage.app",
  messagingSenderId: "655255782780",
  appId: "1:655255782780:web:136d7d795756753bcf10f9"
});

const messaging = firebase.messaging();

// App band hone par bhi ye chalega aur notification dikhayega
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'EduAI';
  const body = payload.notification?.body || '';
  self.registration.showNotification(title, {
    body,
    icon: 'https://cdn-icons-png.flaticon.com/512/2436/2436874.png'
  });
});
