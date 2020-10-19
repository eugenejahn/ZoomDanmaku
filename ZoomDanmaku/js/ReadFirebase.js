// add the bottom 2 scripts to html file
{
  /* <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js"></script> */
}
const firebase = require('firebase');
require('firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyCZ4aKEj0k1tOXw9C1fbhgbs5lXU7GQMQ0',
  authDomain: 'dubhacks-292821.firebaseapp.com',
  databaseURL: 'https://dubhacks-292821.firebaseio.com',
  projectId: 'dubhacks-292821',
  storageBucket: 'dubhacks-292821.appspot.com',
  messagingSenderId: '186332677431',
  appId: '1:186332677431:web:94290b053b2adf92b7c6b2',
  measurementId: 'G-VGGMLBTLY1',
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

async function readData(classId) {
  const data = await db
    .collection('Classes')
    .doc(classId)
    .get()
    .then((res) => {
      return res.data();
    });
  return data;
}
async function callAsync() {
  console.log(await readData('testing'));
}
callAsync();
