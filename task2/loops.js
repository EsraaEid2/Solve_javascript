"use strict"
//1 factorial
let val = 5;
let fac = 1;
for (let i = 2; i <= val; i++) {
    fac *= i;
}
console.log("factorial of 5 is", fac);

//2 fibonancci
let values = [];
values[0] = 0;
values[1] = 1;
let string_Of_Values = "0 1";

for (let i = 2; i < 10; i++) {
    values[i] = values[i - 1] + values[i - 2];

    if (values[i] > 10)
        break;

    string_Of_Values = string_Of_Values + " " + values[i];
}
console.log(string_Of_Values, " fibonancci");

//3 prime
let primeNumbers = [];
let num = 20;

for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers.push(i);
    }
}

console.log(primeNumbers, " are prime numbers");

//4 2-D Array
let myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let stringOfArray = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        stringOfArray += myArray[i][j] + " ";
    }
}
console.log(stringOfArray, "2d array");

//5 print the elements of an array in reverse order.
let OriginArray = [1, 2, 3, 4, 5];
let RevArray = [];
let c = 0;

for (let i = OriginArray.length - 1; i >= 0; i--) {
    RevArray[c] = OriginArray[i];
    c++;
}

console.log(RevArray, "Reversed array");
