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

// Speech
async function responsiveSpeak(Voice, objResponsiveParameters) {
    const text = document.getElementById('langOutput').textContent;
    console.log(text);
    await responsiveVoice.speak(text, Voice, objResponsiveParameters);
}

function synthSpeak(objOptions) {
    const synth = window.speechSynthesis;
    let voices = synth.getVoices();
    console.log(voices); 
    const text = document.getElementById('langOutput').textContent;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = objOptions.pitch;
    utterance.rate = objOptions.rate;
    utterance.volume = objOptions.volume;
    if(objOptions.voice == "UK English Female"){
        utterance.voice = voices[159];
    }
    if(objOptions.voice == "UK English Male"){
        utterance.voice = voices[44];
    }
    if(objOptions.voice == "French Male"){
        utterance.voice = voices[163];
    }
    if(objOptions.voice == "French Female"){
        utterance.voice = voices[39];
    }
    if(objOptions.voice == "Deutsch Male"){
        utterance.voice = voices[157];
    }
    if(objOptions.voice == "Deutsch Female"){
        utterance.voice = voices[32];
    }
    if(objOptions.voice == "Japanese Male"){
        utterance.voice = voices[167];
    }
    if(objOptions.voice == "Japanese Female"){
        utterance.voice = voices[167];
    }
    if(objOptions.voice == "Arabic Male"){
        utterance.voice = voices[158];
    }
    if(objOptions.voice == "Arabic Female"){
        utterance.voice = voices[158];
    }

    speechSynthesis.speak(utterance);
}

  

function runApp(event) {
    event.preventDefault();

    //Retrieve our options from Local Storage 
    let objOptions = getOptionSettings();

    const selectAPI = document.getElementById('API');
    const selectLang = document.getElementById('Translate')
    const selectVoice = document.getElementById('Voice');
    const selectVolume = document.getElementById('volume');
    const selectPitch = document.getElementById('pitch');
    const selectRate = document.getElementById('speed');
  
    
    let selectedAPI = selectAPI.value;
    let selectedLanguage = selectLang.value;
    let selectedVoice = selectVoice.value;

    if(selectedAPI == null) {
        selectedAPI = "SynthSpeech";
    }

    if(selectedVoice == null) {
        selectedVoice = objOptions.voice;
    }

    // Call Translate function first
    translate(`${document.getElementById("text").value}`, selectedLanguage);

    if(selectedVoice == 'Male' && selectedLanguage =="en"){
        objOptions.voice = "UK English Male";
    }

    if(selectedVoice == 'Male' && selectedLanguage =="fr"){
        objOptions.voice = "French Male";
    }

    if(selectedVoice == 'Male' && selectedLanguage =="de"){
        objOptions.voice = "Deutsch Male";
    }

    if(selectedVoice == 'Male' && selectedLanguage =="ja"){
        objOptions.voice = "Japanese Male";
    }

    if(selectedVoice == 'Male' && selectedLanguage =="ar"){
        objOptions.voice = "Arabic Male";
    }

    if(selectedVoice == 'Female' && selectedLanguage =="en"){
        objOptions.voice = "UK English Female";
    }

    if(selectedVoice == 'Female' && selectedLanguage=="fr"){
        objOptions.voice = "French Female";
    }

    if(selectedVoice == 'Female' && selectedLanguage=="de"){
        objOptions.voice = "Deutsch Female";
    }

    if(selectedVoice == 'Female' && selectedLanguage =="ja"){
        objOptions.voice = "Japanese Female";
    }

    if(selectedVoice == 'Female' && selectedLanguage =="ar"){
        objOptions.voice = "Arabic Female";
    }
    
    objOptions.volume = Number(selectVolume.value / 10);
    objOptions.pitch = Number(selectPitch.value);
    objOptions.rate = Number(selectRate.value / 10);

    console.log(objOptions);

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