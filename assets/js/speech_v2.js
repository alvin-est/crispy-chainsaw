// Global HTML element selectors
const API = document.getElementById("API");
const Voice = document.getElementById("Voice");
const userInput = document.getElementById("ttsUserInput");
const readButton = document.getElementById("ttsBtn");

// Local storage Handling
function getOptionSettings() {
    let strDefVoice = localStorage.getItem('DefaultVoice');
    let nDefVolume = localStorage.getItem('DefaultVolume');
    let nDefPitch = localStorage.getItem('DefaultPitch');
    let nDefRate = localStorage.getItem('DefaultRate)');
    let objOptions = {};

    if(strDefVoice == null) {
        strDefVoice = "US English Male"
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

//Save options to local storage 
function storeOptionSettings(objOptions) {
    localStorage.setItem("DefaultVoice", objOptions.voice);
    localStorage.setItem("DefaultVolume", objOptions.volume);
    localStorage.setItem("DefaultPitch", objOptions.pitch);
    localStorage.setItem("DefaultRate", objOptions.rate);
}

// Run this function once user clicks the button
function read() {
    // Pass this on to Speech API
    let text = ''; // Empty string by default
    let response = {};

    // Boolean conditional on translations
    const translateFrom = document.getElementById("TranslateFrom").value;
    const translateTo = document.getElementById("TranslateTo").value;

    // Audio Output options code here
    let objOptions = getOptionSettings();
    const selectVolume = document.getElementById('volume');
    const selectPitch = document.getElementById('pitch');
    const selectRate = document.getElementById('speed');
    objOptions.volume = Number(selectVolume.value / 10);
    objOptions.pitch = Number(selectPitch.value);
    objOptions.rate = Number(selectRate.value / 10);


    // Male or Female conditionals
    if(Voice.value === "Male") {
        switch(translateTo) {
            case "en":
                objOptions.voice = "Australian Male";
                break;
            case "fr":
                objOptions.voice = "French Male";
                break;
            case "de":
                objOptions.voice = "Deutsch Male";
                break;
            case "ja":
                objOptions.voice = "Japanese Male";
                break;
            case "ar":
                objOptions.voice = "Arabic Male";
                break;
        }
    }
    else {
        switch(translateTo) {
            case "en":
                objOptions.voice = "UK English Female";
                break;
            case "fr":
                objOptions.voice = "French Female";
                break;
            case "ja":
                objOptions.voice = "Japanese Female";
                break;
            case "de":
                objOptions.voice = "Deutsch Female";
                break;
            case "ar":
                objOptions.voice = "Arabic Female";
                break;
        }
    }
    
    //responsiveVoice.speak(text,voice, objResponsiveParameters);
    
    console.log(objOptions);
    // Pass to API
    switch(API.value) {
        case "responsiveVoice":
            //responsiveVoiceSpeak(text,lang, objOptions);
            responsivetranslateandspeak(userInput.value, translateFrom, translateTo, objOptions)
            break;
        case "synthSpeech":
            console.log("coming soon!");
            break;
    }
    //save our voice settings
    storeOptionSettings(objOptions);
}

function responsiveVoiceSpeak(text, voice, objOptions) {

    let objResponsiveParameters = {};
    objResponsiveParameters.pitch = objOptions.pitch;
    objResponsiveParameters.rate = objOptions.rate;
    objResponsiveParameters.volume = objOptions.volume;
    //Speakout translated text
    responsiveVoice.speak(text, voice, objResponsiveParameters);
}

// Button onClick event listener
readButton.addEventListener("click", read);