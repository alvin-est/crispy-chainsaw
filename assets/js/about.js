// Setting variables to HTML elements
const dialog = document.getElementById("popupModal");
const button = document.getElementById("newsletterBtn");

button.addEventListener('click', showModal);

function showModal(event) {
    event.preventDefault();
    dialog.showModal();
}