// add the bottom 2 scripts to html file
{
  /* <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js"></script> */
}
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function writeData(classId, timeStamp, comment) {
  const usersRef = db.collection('Classes').doc(classId);
  usersRef.get().then((docSnapshot) => {
    // makes sure class exists
    let dataObj = {};
    if (docSnapshot.exists) {
      var data = docSnapshot.data();
      if (data[timeStamp] == null || data[timeStamp] == '') {
        dataObj[timeStamp] = [comment];
        usersRef.update(dataObj);
        return true;
      } else {
        dataObj[timeStamp] = data[timeStamp];
        dataObj[timeStamp].push(comment);
        console.log(dataObj);
        usersRef.update(dataObj);
        return true;
      }
    } else {
      let dataObj = {};
      dataObj[timeStamp] = [comment];
      usersRef.set(dataObj);
      return true;
    }
  });
}
