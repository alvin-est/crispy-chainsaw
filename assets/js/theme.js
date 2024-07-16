// Loads the html document before the Javascript file is loaded to prevent errors
document.addEventListener('DOMContentLoaded', () => {
    
    // Decalring the switch theme button in the html document
    // If there is no switchThemeBtn the code does not execute
    const switchThemeBtn = document.getElementById('switchThemeBtn');
    if (!switchThemeBtn) return;

    // Selecting the html element from the document
    const htmlElement = document.documentElement;

    //  Switch theme button event listener when clicked
    switchThemeBtn.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; // Toggle theme between light and dark.
        htmlElement.setAttribute('data-theme', newTheme); // Setting  the new theme to the data-theme in the html file
    });

    const savedTheme = localStorage.getItem('theme') || 'dark'; // Gets the saved theme from localStorage, default to dark mode (If there is no theme in local storage it defaults to dark)
    htmlElement.setAttribute('data-theme', savedTheme); // Applies saved theme to the html element.
});


// This code enables the user to switch between light and dark mode , with the selected theme saved in local storage. 
// So the theme can be re applied whenever the user returns to the site.
