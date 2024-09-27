"use strict"

//1 password check
let password = prompt("Enter your password");

if (password.length >= 8) {
    console.log("Your password is strong", "passord exercise");
}
else
    console.log("Your password is weak", "passord exercise");

//2 color checked
let color = prompt("Enter the color");

if (color == 'red' || color == 'green' || color == 'blue') {
    console.log('Color is primary color');
}
else {
    console.log("Color isn't primary color");
}

//3 Negative number check
let y = prompt("Enter the number to check if negative");

if (y < 0)
    console.log(y + " is a negative number");
else {
    console.log(y + " is a positive number");

}

//4 check if it array
let list = [1, 2, 3];

if (list instanceof Array) {
    console.log("It's an array");
} else {
    console.log("It's not an array");
}

