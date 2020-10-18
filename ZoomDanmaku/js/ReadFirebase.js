// add the bottom 2 scripts to html file
{
  /* <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js"></script> */
}
const firebase = require('firebase');
require('firebase/firestore');


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
