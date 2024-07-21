// Variables
const API_KEY = 'AIzaSyCMJ05_dwlQH6ipqi-7lOuxRcSQYw2-n2Q';
let result = {}; // Create JS object
let url = '';

//function translate(myText, sourceLang, targetLang, objOptions) {
    // Grabs user input and generates API URL
//    url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${myText}`;

    // Add key: value to our object
//    result.language = targetLang;

    // Fetch from Google API
//    fetchData(url, objOptions);

    // Return object
//    return result;
//}

async function fetchData(url, objOptions) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const translatedText = data.data.translations[0].translatedText;

        // Update UI output
        const outputEl = document.getElementById("langOutput");
        outputEl.textContent = translatedText;

        // Add key: value to our object
        result.output = translatedText;
        // Now, call our text to speech API
        responsiveVoiceSpeak(translatedText, objOptions.voice, objOptions);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function responsivetranslateandspeak(myText, sourceLang, targetLang, objOptions) {
    const outputEl = document.getElementById("langOutput");
    let translateresult = {};
    const translateInput = !(sourceLang == targetLang);
    url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${myText}`;

    if(!translateInput) {
        console.log("Will not translate!");
        responsiveVoiceSpeak(myText, objOptions.voice, objOptions);
    } else {
        console.log("Translating..");
        // Fetch from Google API
        fetchData(url, objOptions);
    }
}
