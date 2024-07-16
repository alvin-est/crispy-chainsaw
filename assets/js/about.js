// Setting variables to HTML elements
const dialog = document.getElementById("popupModal");
const button = document.getElementById("newsletterBtn");
const closeBtn = document.getElementById("modalClose");
const confirmBtn = document.getElementById("modalConfirm");
const confirmationMsg = document.getElementById("confirmationMsg");
const emailInput = document.getElementById("modalEmail");

// Add 'click' event listeners
button.addEventListener('click', showModal); // Run on Subscribe
closeBtn.addEventListener('click', closeModal); // Run on Close
confirmBtn.addEventListener('click', emailSignUp); // Run on Confirm

function showModal(event) {
    event.preventDefault();
    dialog.showModal();
}

function closeModal(event) {
    event.preventDefault();
    dialog.close();
    // Clear inputs
    confirmationMsg.textContent = "";
    emailInput.value = "";
}

function emailSignUp() {
    // Validation
    if(emailInput.value)
        confirmationMsg.textContent = "Signed up succesfully!";
    else 
        confirmationMsg.textContent = "Please enter a valid email.";

    // Add more code if necessary
}