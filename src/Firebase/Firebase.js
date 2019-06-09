import firebase from 'firebase';

{/* <script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"></script> */}

{/* <script> */}
  {/* // Your web app's Firebase configuration */}
  const firebaseConfig = {
    apiKey: "AIzaSyC4rZ4yoWnmIitfas1E66jpCzw5ddOCCrA",
    authDomain: "traveltime-react.firebaseapp.com",
    databaseURL: "https://traveltime-react.firebaseio.com",
    projectId: "traveltime-react",
    storageBucket: "traveltime-react.appspot.com",
    messagingSenderId: "703878750091",
    appId: "1:703878750091:web:908e2813bc1a0c97"
  };
  {/* // Initialize Firebase */}
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
// </script>