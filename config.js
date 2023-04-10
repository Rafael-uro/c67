import firebase from 'firebase';

// adicione SDK do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAp5oJzBq9jfIlYjZj7Uf9ug1ECxeqDNF8",
  authDomain: "c67-9905d.firebaseapp.com",
  databaseURL: "https://c67-9905d-default-rtdb.firebaseio.com",
  projectId: "c67-9905d",
  storageBucket: "c67-9905d.appspot.com",
  messagingSenderId: "495475633406",
  appId: "1:495475633406:web:3f125fc0187c99fe4bc9af"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();