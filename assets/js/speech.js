// Local storage Handling
function getOptionSettings() {
    let strDefVoice = localStorage.getItem('DefaultVoice');
    let nDefVolume = localStorage.getItem('DefaultVolume');
    let nDefPitch = localStorage.getItem('DefaultPitch');
    let nDefRate = localStorage.getItem('DefaultRate)');
    let objOptions = {};

    if(strDefVoice == null) {
        strDefVoice = "UK English Male"
    }
    if(nDefVolume == null) {
        nDefVolume = 1; 
    }
    if(nDefPitch == null) {
        nDefPitch = 1;
    }
    if(nDefRate == null) {
        nDefRate = 0.9;
    }
    objOptions.voice = strDefVoice;
    objOptions.volume = nDefVolume;
    objOptions.pitch = nDefPitch;
    objOptions.rate = nDefRate;

    return objOptions;
    }

function storeOptionSettings(objOptions) {
    localStorage.setItem("DefaultVoice", objOptions.voice);
    localStorage.setItem("DefaultVolume", objOptions.volume);
    localStorage.setItem("DefaultPitch", objOptions.pitch);
    localStorage.setItem("DefaultRate", objOptions.rate);
}

// Call Translate function
//    translate(`${document.getElementById("text").value}`, selectedLang);

// Speech
function responsiveSpeak(Voice, objResponsiveParameters) {
    var text = document.getElementById('text').value;
    console.log(Voice);
    console.log(objResponsiveParameters);
    responsiveVoice.speak(text, Voice, objResponsiveParameters);
}

function synthSpeak(objOptions) {
    const synth = window.speechSynthesis;
    let voices = synth.getVoices();  
    let text = document.getElementById('text').value;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = objOptions.pitch;
    utterance.rate = objOptions.rate;
    utterance.volume = objOptions.volume;
    if(objOptions.voice == "Australian Female"){
        utterance.voice = voices[0];
    }
    if(objOptions.voice == "Australian Male"){
        utterance.voice = voices[44];
    }
    if(objOptions.voice == "UK English Male"){
        utterance.voice = voices[160];
    }
    if(objOptions.voice == "UK English Female"){
        utterance.voice = voices[159];
    }
    
    speechSynthesis.speak(utterance);
}

function runApp(event) {
    event.preventDefault();

    let objOptions = getOptionSettings();
    console.log(objOptions);

    const selectAPI = document.getElementById('API');
    const selectVoice = document.getElementById('Voice');
    const selectVolume = document.getElementById('volume');
    const selectPitch = document.getElementById('pitch');
    const selectRate = document.getElementById('speed');
    
    let selectedAPI = selectAPI.value;
    let selectedVoice = selectVoice.value;
    
    if(selectedAPI == null) {
        selectedAPI = "SynthSpeech";
    }

    if(selectedVoice == null) {
        selectedVoice = objOptions.voice;
    }

    objOptions.voice = selectVoice.value;
    objOptions.volume = Number(selectVolume.value / 10);
    objOptions.pitch = Number(selectPitch.value);
    objOptions.rate = Number(selectRate.value / 10);

    // To-do
    objResponsiveParameters = {};
    objResponsiveParameters.pitch = objOptions.pitch;
    objResponsiveParameters.rate = objOptions.rate;
    objResponsiveParameters.volume = objOptions.volume;
    if(selectedAPI == 'Responsive Voice'){
        responsiveSpeak(objOptions.voice, objResponsiveParameters);
    }
    if(selectedAPI == 'SynthSpeech'){
        synthSpeak(objOptions);
    }
    storeOptionSettings(objOptions);
}

// Button 'onClick' event listener
const speak = document.getElementById('ttsBtn');
speak.addEventListener('click', runApp);