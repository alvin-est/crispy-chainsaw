// Read from LocalStorage currently set theme - light or dark mode
document.addEventListener('DOMContentLoaded', () => {
    const switchThemeBtn = document.getElementById('switchThemeBtn');
    if (!switchThemeBtn) return;

    const htmlElement = document.documentElement;

    switchThemeBtn.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
});

