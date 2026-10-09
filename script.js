const form = document.querySelector("#sydney-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent = "Thanks! Your request has been submitted.";
});