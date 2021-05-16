import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAslCDbNOoDy6f1Kp_HmVyKZLrjwZdWYtg",
    authDomain: "fir-project-83396.firebaseapp.com",
    databaseURL: "https://fir-project-83396-default-rtdb.firebaseio.com",
    projectId: "fir-project-83396",
    storageBucket: "fir-project-83396.appspot.com",
    messagingSenderId: "393604875176",
    appId: "1:393604875176:web:e1d533608ead297a79939d",
    measurementId: "G-X553Q5W2SK"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;