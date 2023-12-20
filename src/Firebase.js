// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGIcm0sRwFvtWO6uARSOZ0ushPOkYTEYc",
    authDomain: "what-s-app-clone-197e6.firebaseapp.com",
    projectId: "what-s-app-clone-197e6",
    storageBucket: "what-s-app-clone-197e6.appspot.com",
    messagingSenderId: "874791725382",
    appId: "1:874791725382:web:29094712872d05be851d47",
    measurementId: "G-230NRD4YTR"
  };
 
  const firebaseApp = firebase. initializaApp(firebaseConfig);
  const db = firebaseApp.firebase();
  const auth = firebase.auth();
  const provider = new firebase.auth.
  GooleAuthprovider();

  export {auth , provider};
  export default db;