// Conditionals
function runApp(event) {
    event.preventDefault();

    const selectAPI = document.getElementById('API');
    const selectVoice = document.getElementById('Voice');
    const selectLang = document.getElementById('Translate');
    
    const selectedAPI = selectAPI.value;
    const selectedVoice = selectVoice.value;
    const selectedLang = selectLang.value;

    console.log(selectedVoice);
    // To-do
    if(selectedAPI == 'Responsive Voice'){
        responsiveSpeak(selectedVoice);
    }
    if(selectedAPI == 'SynthSpeech'){
        synthSpeak(selectedVoice);
    }
    if(selectedAPI == 'Google'){
        alert('Coming soon');
    }

    // Call Translate function
    translate(`${document.getElementById("text").value}`, selectedLang);
}

// Speech
function responsiveSpeak(Voice) {
    var text = document.getElementById('text').value;
    responsiveVoice.speak(text, Voice, {rate: 0.9});
}

function synthSpeak(Voice) {
    const synth = window.speechSynthesis;
    let voices = synth.getVoices();  
    let text = document.getElementById('text').value;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    if(Voice == "Australian Female"){
        utterance.voice = voices[0];
    }
    if(Voice == "Australian Male"){
        utterance.voice = voices[44];
    }
    if(Voice == "UK English Male"){
        utterance.voice = voices[160];
    }
    if(Voice == "UK English Female"){
        utterance.voice = voices[159];
    }
    
    speechSynthesis.speak(utterance);
}

// Button 'onClick' event listener
const speak = document.getElementById('ttsBtn');
speak.addEventListener('click', runApp);