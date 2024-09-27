//1
//cash flow ratio
let cash = 1000;
let current_libilities = 500;
let result = cash / current_libilities;

console.log(result, "cash flow ratio");

//Net income  
let revenues = 1000;
let expense = 500;
console.log(revenues - expense, "Net income");

//Total assets 
let liabilites = 1000;
let equity = 500;
console.log(liabilites + equity, "Total assets");

//Net income (using profit margin and sales)
let profit = 1000;
let sales = 500;
console.log(profit * sales, "Net income");

//Average   
let numbers = [7, 9, 2];
let sum = 0;
for (let i = 0; i < 3; i++) {
    sum += numbers[i];
}
console.log(sum / 3, "Average");

//discount
let price = 150;
let discount = .3;
let new_price = price - price * discount;
console.log(new_price, "discount");

//Age limit 
let age = 20;
if (age > 18 && age < 30) {
    console.log(true, "Age limit");
}
else
    console.log(false, "Age limit");

//Exponential
let num2 = 2;
let num3 = 3;
console.log(num2 ** num3, "Exponential");

//Reminder
let number1 = 10;
let number2 = 4;
console.log(number1 % number2, "Reminder");

//2  output for expression
console.log(typeof (100));//number
console.log(typeof (73.9));//number
console.log(NaN);//not a number
console.log(typeof ("Water"));//string
console.log(typeof (false));//boolean
console.log(typeof (9 != 11));//boolean
console.log(typeof ("Orang" + "e"));//string
console.log(typeof ("Orange" - "s"));//number
console.log(typeof ("4" + "8"));//string 48
console.log(typeof ("4" - "8"));//number
console.log(typeof ("name" + 3));//string
console.log(typeof ("name" - 3));//number
console.log(typeof (82 * "word"));//number
console.log(typeof (1 + "hello"));//string
console.log(typeof ("hello" + 1));//string
console.log(typeof (1 + true));//string
console.log(typeof ("hello" + true))//string
console.log(typeof (infinity));//undefined
console.log(typeof (1 == '1'));//boolean
console.log(typeof (1 === '1'));//boolean




























