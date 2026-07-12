// Automatically display the current year in the footer.
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Handle the beta quote form.
const quoteForm = document.querySelector("#quote-form");
const formMessage = document.querySelector("#form-message");

if (quoteForm && formMessage) {
    quoteForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you. This beta form is working visually, but it is not connected to email yet.";

        quoteForm.reset();
    });
}
