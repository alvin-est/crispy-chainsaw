// Loads the html document before the Javascript file is loaded to prevent errors
document.addEventListener('DOMContentLoaded', () => {
    
    // Declaring the switch theme button in the html document
    // If there is no switchThemeBtn the code does not execute
    const switchThemeBtn = document.getElementById('switchThemeBtn');
    if (!switchThemeBtn) return;

    // Selecting the html element from the document.
    const htmlElement = document.documentElement;

     // Function to set the theme.
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme); // Sets theme attribute to to html and saves it to local storage.
        localStorage.setItem('theme', theme); // Save the theme to localStorage.
    };
    //  Switch theme button event listener when clicked
    switchThemeBtn.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; // Toggle theme between light and dark.
        setTheme(newTheme); // Set the new theme and save it to localStorage.
    });

    const savedTheme = localStorage.getItem('theme') || 'dark'; // Gets the saved theme from localStorage, default to dark mode (If there is no theme in local storage it defaults to dark)
    setTheme(savedTheme); // Apply the saved theme to the html element.
});




// This code enables the user to switch between light and dark mode , with the selected theme saved in local storage. 
// So the theme can be re applied whenever the user returns to the site.
