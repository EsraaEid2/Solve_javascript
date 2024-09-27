"use strict"

// Select the form element
const form = document.getElementById('myForm');

// Create and insert label for 'username'
const usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');  // associate the label with username input
usernameLabel.textContent = "User Name:";
form.insertBefore(usernameLabel, document.getElementById('username'));

// Create and insert label for 'password'
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = "Password:";
form.insertBefore(passwordLabel, document.getElementById('password'));

// Create and insert label for 'confirm-password'
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirm-password');
confirmPasswordLabel.textContent = "Confirm Password:";
form.insertBefore(confirmPasswordLabel, document.getElementById('confirm-password'));
