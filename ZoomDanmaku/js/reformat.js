window.addEventListener('load', function () {
  var element = document.getElementsByClassName('video-player');
  var videoDiv = document.getElementsByClassName('player-view')[0];
  var videoCoordinates = videoDiv.getBoundingClientRect();

  var f = document.createElement('form');
  f.setAttribute('id', 'comment_form');
  f.setAttribute('method', 'post');
  f.setAttribute('action', 'submit.php');

  var i = document.createElement('input'); //input element, text
  i.setAttribute('id', 'comment_text');
  i.setAttribute('type', 'text');
  i.setAttribute('placeholder', 'Type something...');

  var s = document.createElement('input'); //input element, Submit button
  s.setAttribute('id', 'comment_button');
  s.setAttribute('type', 'submit');
  s.setAttribute('value', 'SEND');

  var b = document.createElement('button');
  b.setAttribute('id', 'recording');
  b.innerHTML = 'Record';

  f.appendChild(i);
  f.appendChild(s);
  f.appendChild(b);
  var videoDiv = document.getElementsByClassName('player-view')[0];
  var videoCoordinates = videoDiv.getBoundingClientRect();
  var xPos = videoCoordinates.left;
  var yPos = videoCoordinates.bottom;
  f.style.left = xPos + 'px';
  f.style.top = yPos + 'px';
  element[0].appendChild(f);

  f.addEventListener('submit', handleSubmit);
  function handleSubmit(e) {
    writeDataToFireBase(document.getElementById('comment_text').value);
    e.preventDefault();
    document.getElementById('comment_text').value = '';
  }

  var target = document.getElementById('comment_button');
  target.innerHTML = html.join('');
});
