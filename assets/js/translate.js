// Variables
const API_KEY = 'AIzaSyCMJ05_dwlQH6ipqi-7lOuxRcSQYw2-n2Q';
let result = {}; // Create JS object
let url = '';

function translate(myText, sourceLang, targetLang) {
    // Grabs user input and generates API URL
    url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${myText}`;

    // Add key: value to our object
    result.language = targetLang;

    // Fetch from Google API
    fetchData(url);

    // Return object
    return result;
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const translatedText = data.data.translations[0].translatedText;

        // Update UI output
        const outputEl = document.getElementById("langOutput");
        outputEl.textContent = translatedText;

        // Add key: value to our object
        result.output = translatedText;

    } catch (error) {
        console.error('Error fetching data:', error);
    }


}
