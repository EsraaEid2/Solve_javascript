"use strict"

const form = document.getElementById('myForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const registerButton = document.getElementById('registerButton'); // Select the register button

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

// Function to validate all form fields
function validateForm() {
    let userValid = true;

    // Validate Username
    if (username.value === "") {
        userValid = false;
    }

    // Validate Password
    if (password.value === "") {
        userValid = false;
    }

    // Validate Confirm Password and match with password
    if (confirm_password.value === "" || password.value !== confirm_password.value) {
        userValid = false;
    }

    // Enable or disable the register button based on form validity
    registerButton.disabled = !userValid;
}

// Validate password if match to confirm password field
function validatePasswordMatch() {
    validateForm();
    if (confirm_password.value === "") {
        confirmPasswordError.textContent = "Please confirm your password";
    } else if (password.value !== confirm_password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
    } else {
        confirmPasswordError.textContent = "";
    } 
}

// Attach blur event listeners to validate each field only after the user has interacted with it
username.addEventListener('blur', function () {
    validateField(username, usernameError, "Username is required");
});

password.addEventListener('blur', function () {
    validateField(password, passwordError, "Password is required");
});

confirm_password.addEventListener('blur', function () {
    validatePasswordMatch();
});

// Validate form before submission
form.onsubmit = function (event) {
    validateForm(); // Validate before submission
    if (registerButton.disabled) {
        event.preventDefault();
    }
    else{
        alert('you are successfully registered!');
    }
  
};
