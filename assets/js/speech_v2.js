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
    let lang = 'en'; // English by default
    let response = {};

    // Boolean conditional on translations
    const translateFrom = document.getElementById("TranslateFrom").value;
    const translateTo = document.getElementById("TranslateTo").value;
    const translateInput = !((translateFrom === "en") && (translateTo === "en"));

    // Grab user input
    if(translateInput === false) {
        // response.language = 'en';
        // response.output = userInput.value;
        text = userInput.value;
        console.log("Will not translate!");
    }

    if(translateInput === true) {
        console.log("Translating..");

        // Call our translate function
        response = translate(userInput.value, translateFrom, translateTo); // Returns object
        console.log(response);

        text = response.output;
        lang = response.language;
    }

    // Audio Output options code here
    let objOptions = getOptionSettings();
    const selectVolume = document.getElementById('volume');
    const selectPitch = document.getElementById('pitch');
    const selectRate = document.getElementById('speed');
    objOptions.volume = Number(selectVolume.value / 10);
    objOptions.pitch = Number(selectPitch.value);
    objOptions.rate = Number(selectRate.value / 10);

    // Pass to API
    switch(API.value) {
        case "responsiveVoice":
            responsiveVoiceSpeak(text,lang, objOptions);
            break;
        case "synthSpeech":
            console.log("coming soon!");
            break;
    }

    console.log(text);
}

function responsiveVoiceSpeak(text,lang, objOptions) {

    let voice = "US English Male"; // By default
    let objResponsiveParameters = {};

    // Male or Female conditionals
    if(Voice.value === "Male") {
        switch(lang) {
            case "en":
                voice = "Australian Male";
                break;
            case "fr":
                voice = "French Male";
                break;
            case "de":
                voice = "Deutsch Male";
                break;
            case "ja":
                voice = "Japanese Male";
                break;
            case "ar":
                voice = "Arabic Male";
                break;
        }
    }
    else {
        switch(lang) {
            case "en":
                voice = "UK English Female";
                break;
            case "fr":
                voice = "French Female";
                break;
            case "ja":
                voice = "Japanese Female";
                break;
            case "de":
                voice = "Deutsch Female";
                break;
            case "ar":
                voice = "Arabic Female";
                break;
        }
    }

    // Now, you shall speak!
    console.log(voice);
    
    objResponsiveParameters.pitch = objOptions.pitch;
    objResponsiveParameters.rate = objOptions.rate;
    objResponsiveParameters.volume = objOptions.volume;
    responsiveVoice.speak(text,voice, objResponsiveParameters);

    //save our voice settings
    storeOptionSettings(objOptions);
}

// Button onClick event listener
readButton.addEventListener("click", read);