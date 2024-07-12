// Conditionals
function runApp(event) {
    event.preventDefault();

    // To-do
    responsiveSpeak();
}

// Speech
function responsiveSpeak() {
    var text = document.getElementById('text').value;
    var voice = "UK English Male"
    responsiveVoice.speak(text, voice, {rate: 0.9});
}

function synthSpeak() {
          var text = document.getElementById('text').value;
          var utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
}

// Button 'onClick' event listener
const speak = document.getElementById('ttsBtn');
speak.addEventListener('click', runApp);