const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'en-US';
//import recorder from 'node-record-lpcm16'
var recording = false;

window.addEventListener('load', function () {
  //microphoneStream(encoding, sampleRateHertz, languageCode)
  var recognition = new webkitSpeechRecognition();

  recognition.continuous = true;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  document.getElementById('recording').addEventListener('click', (e) => {
    if (!recording) {
      recognition.start();
      console.log('started');
      document.getElementById('recording').style.backgroundColor = 'red';
      document.getElementById('recording').style.color = 'white';
    } else {
      recognition.stop();
      console.log('stopped');
      document.getElementById('recording').style.backgroundColor = 'white';
      document.getElementById('recording').style.color = '#4a90e2';
    }
    recording = !recording;
  });

  recognition.onresult = function (event) {
    if (event.results[event.results.length - 1][0].confidence > 0.85) {
      console.log(event.results[event.results.length - 1][0].transcript);
      writeDataToFireBase(
        event.results[event.results.length - 1][0].transcript
      );
    }
  };
});

function microphoneStream(encoding, sampleRateHertz, languageCode) {
  // [START micStreamRecognize]

  // Node-Record-lpcm16

  // Imports the Google Cloud client library
  const speech = require('@google-cloud/speech');

  const config = {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  };

  const request = {
    config,
    interimResults: false, //Get interim results from stream
  };

  // Creates a client
  const client = new speech.SpeechClient();

  // Create a recognize stream
  const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', (data) => {
      console.log(data);
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : '\n\nReached transcription time limit, press Ctrl+C\n'
      );
    });

  // Start recording and send the microphone input to the Speech API
  recorder
    .record({
      sampleRateHertz: sampleRateHertz,
      threshold: 0, //silence threshold
      recordProgram: 'rec', // Try also "arecord" or "sox"
      silence: '5.0', //seconds of silence before ending
    })
    .stream()
    .on('error', console.error)
    .pipe(recognizeStream);

  console.log('Listening, press Ctrl+C to stop.');
  // [END micStreamRecognize]
}
