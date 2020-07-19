// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);
// importScripts("https://www.gstatic.com/firebasejs/firebase/init.js");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD_WKh-DfUaj3eqRLswN334_AeO_oj2ewU",
  authDomain: "covid-19-ionic-angular.firebaseapp.com",
  databaseURL: "https://covid-19-ionic-angular.firebaseio.com",
  projectId: "covid-19-ionic-angular",
  storageBucket: "covid-19-ionic-angular.appspot.com",
  messagingSenderId: "1015488645358",
  appId: "1:1015488645358:web:5c0c44c99c7f71e42c8bff",
  measurementId: "G-B12G2D7G0W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
var messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
// [END background_handler]
