'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

document.getElementById('text_form').addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  const comment = document.getElementById('text').value;
  e.preventDefault();
  chrome.tabs.query({ active: true }, (tab) => {
    chrome.tabs.sendMessage(tab[0].id, { comment: comment }, (res) => {
      console.log(res.confirm);
    });
  });
}
