"use strict"

//1
function make_words_array(str) {
    const new_array = str.split(" ");
    return new_array;
}
console.log(make_words_array("Orange Jordan"), "function 1");

//2
function convert_phone_num(phone_num) {
    let new_num = "*******" + phone_num[7] + phone_num[8] + phone_num[9];
    return new_num;
}
console.log(convert_phone_num("0776807777"), "function 2");

//3
function hidden_email(email) {
    let [username, domain] = email.split("@");
    let hidden_username = username.substring(0, 6) + '...';
    return hidden_username + '@' + domain;
}
let email = "orange_academy@orange.jo";
console.log(hidden_email(email));

//4
//function first_letter_upper(str){
//  let first_letter= str.charAt(0).toUpperCase();
//  str.slice(0);
// first_letter.concate(str);
// return first_letter;
//}
//let word= 'coding academy by orange' ;
//console.log(first_letter_upper(word));

//5

//6
function flip_number(num) {
    let number = num.toString().split('').reverse().join('');
    return number;
}
console.log(flip_number(92485), "flipped number");

//7
function swap(num1, num2) {
    let num3 = num1;
    num1 = num2;
    num2 = num3;
    return { num3, num2 };
}
let result = swap(3, 4);
console.log('a=${result.num3},b=${result.num2}');

//8
function remove_letter(word_str, str_index) {
    return word_str.slice(0, str_index) + word_str.slice(str_index + 1);
}
console.log(remove_letter("orange", 3));







