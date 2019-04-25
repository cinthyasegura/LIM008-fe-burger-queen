import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAQNbFOa0UnZlatTijqIuxBf1sbLlZ2CeU",
  authDomain: "burger-queen-600e5.firebaseapp.com",
  databaseURL: "https://burger-queen-600e5.firebaseio.com",
  projectId: "burger-queen-600e5",
  storageBucket: "burger-queen-600e5.appspot.com",
  messagingSenderId: "432037519073"
};
  firebase.initializeApp(config);
  
  export default firebase;