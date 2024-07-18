const API_KEY = 'AIzaSyCMJ05_dwlQH6ipqi-7lOuxRcSQYw2-n2Q';
const sourceLang = 'en';
const targetLang = 'fr';
const text = 'Hello, world!';

// alert("Let's get ready to rumbleee!!");

const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${text}`;

fetch(url)

.then(response => response.json())

.then(data => {

const translatedText = data.data.translations[0].translatedText;

console.log(translatedText); // "Bonjour, le monde!"

const outputEl = document.getElementById("langOutput");
outputEl.textContent = translatedText;

});