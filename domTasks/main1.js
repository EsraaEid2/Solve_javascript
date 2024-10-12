"use strict";

const form = document.getElementById('myForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const registerButton = document.getElementById('registerButton');

// Create and insert label for username
const usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.textContent = "Username: ";
form.insertBefore(usernameLabel, username);

// Create and insert label for password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = "Password: ";
form.insertBefore(passwordLabel, password);

// Create and insert label for confirm password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirm_password');
confirmPasswordLabel.textContent = "Confirm Password: ";
form.insertBefore(confirmPasswordLabel, confirm_password);

// Reach the span for each input
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Initially, disable the register button
registerButton.disabled = true;

// Function to validate individual fields and display error messages if the field is empty
function validateField(field, errorElement, errorMessage) {
    if (field.value.trim() === "") {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = "";
    }
}

// Validate if passwords match and show an error if they do not
function validatePasswordMatch() {
    if (confirm_password.value.trim() === "") {
        confirmPasswordError.textContent = "Please confirm your password";
    } else if (password.value !== confirm_password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
    } else {
        confirmPasswordError.textContent = "";
    }
    validateForm(); // Check the entire form's validity again
}

// Function to validate the entire form and control the register button state
function validateForm() {
    let isValid = true;

    // Validate Username
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Validate Password
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Validate Confirm Password and match with password
    if (confirm_password.value.trim() === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    } else if (password.value !== confirm_password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // Enable or disable the register button based on form validity
    registerButton.disabled = !isValid;
}

// Add event listeners to validate fields on input changes
username.addEventListener('input', () => {
    validateField(username, usernameError, "Username is required");
    validateForm();
});

password.addEventListener('input', () => {
    validateField(password, passwordError, "Password is required");
    validateForm();
});

confirm_password.addEventListener('input', () => {
    validatePasswordMatch();
});

// Handle form submission and display success message if valid
form.onsubmit = function (event) {
    validateForm(); // Validate before submission
    if (registerButton.disabled) {
        event.preventDefault(); // Prevent form submission if not valid
    } else {
        alert('You are successfully registered!');
    }
};
