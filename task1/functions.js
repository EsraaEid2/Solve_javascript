"use strict"

// ----------------------the functions----------------------
//1 makes each word in a string an element of an array.
function make_words_array(str) {
    const new_array = str.split(" ");
    return new_array;
}

//2 converts the first seven digits of a mobile phone number to a hidden 
function convert_phone_num(phone_num) {
    let new_num = "*******" + phone_num[7] + phone_num[8] + phone_num[9];
    return new_num;
}

//3 converts an email address to a hidden form
function hidden_email(email) {
    let [username, domain] = email.split("@");
    let hidden_username = username.substring(0, 6) + '...';
    return hidden_username + '@' + domain;
}

//4 t turns the first letter of every word in a string to the upper case.
function first_letter_upper(str) {
    let first_letter = str.charAt(0).toUpperCase() + str.slice(1);
    return first_letter;
}

//5 turns the first letter of every word in a string to the upper case
function capiltalize_each_word(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//6 Write a function that flips a number.
function flip_number(num) {
    let number = num.toString().split('').reverse().join('');
    return number;
}

//7 Write a function that swaps the value of 2 variables
function swap(num1, num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
    return { num1, num2 };
}
function swap_another_way(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

//8 Write a function that removes an indexed character from a string.
function remove_letter(word_str, str_index) {
    return word_str.slice(0, str_index) + word_str.slice(str_index + 1);
}

//9 merges two strings after removing the first character of each one.
function merge_strings(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}

//10  ensures a specific character appears in a string's first or last position
function ensure_char(letter, str) {
    return str.startsWith(letter) || str.endsWith(letter);
}

//11  takes a string and returns every word in the string as an array element
function wordsToArray(word) {
    return word.split(' ');
}

//12  takes a string and reorders the characters alphabetically.
function reOrderAlpha(str) {
    return str.split("").sort().join("");
}

//----------------------here is console log statements----------------------
//1
console.log(make_words_array("Orange Jordan"), "convert string to array");

//2
console.log(convert_phone_num("0776807777"), "converted number for hidden");

//3
let email = "orange_academy@orange.jo";
console.log(hidden_email(email), 'converted email for hidden');

//4
let word = 'coding academy by orange';
console.log(first_letter_upper(word), 'first letter capitlized');

//5
let capitalized_word = 'coding academy by orange';
console.log(capiltalize_each_word(capitalized_word), 'capiltalize each word');

//6
console.log(flip_number(92485), "flipped number");

//7
let result = swap(3, 4);
console.log(result, "swaped numbers");

//8
console.log(remove_letter("orange", 3));

//9
console.log(merge_strings('lora', 'inge'));

//10
console.log(ensure_char("o", "orange"));
console.log(ensure_char("z", "orange"));

//11
console.log(wordsToArray('Coding Academy by Orange'));

//12
console.log(reOrderAlpha("Orange"));








