// HTML element selectors
const API = document.getElementById("API");
const Voice = document.getElementById("Voice");
const userInput = document.getElementById("ttsUserInput");
const readButton = document.getElementById("ttsBtn");

// Button onClick event listener
readButton.addEventListener("click", read);

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
    // TODO


    // Pass to API
    switch(API.value) {
        case "responsiveVoice":
            speak_API1(text,lang);
            break;
        case "synthSpeech":
            console.log("coming soon!");
            break;
    }

    console.log(text);
}

function speak_API1(text,lang) {

    let voice = "US English Male"; // By default

    // Male or Female conditionals
    if(Voice.value === "Male") {
        switch(lang) {
            case "en":
                voice = "US English Male";
                break;
            case "fr":
                voice = "French Male";
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
                voice = "US English Female";
                break;
            case "fr":
                voice = "French Female";
                break;
            case "ja":
                voice = "Japanese Female";
                break;
            case "ar":
                voice = "Arabic Female";
                break;
        }
    }

    // Now, you shall speak!
    responsiveVoice.speak(text,voice);

}