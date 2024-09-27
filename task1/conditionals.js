//1 clculate age to join orange program
function calculateAge(birth_year) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birth_year;
    return age;
}

let birth_year = prompt("Please enter your year of birth");
let age = calculateAge(birth_year);

if (age > 60) {
    console.log('You may join the seniors’ program.');
} else if (age > 30) {
    console.log('You are not eligible. You may join other programs.');
} else if (age >= 18 && age <= 30) {
    console.log('You are eligible. Start your application.');
} else if (age < 18) {
    console.log('You may join the kids program.');
}

//2 switches the letters' case
function switchCase(str) {
    let switchedStr = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            switchedStr += char.toLowerCase();
        } else {
            switchedStr += char.toUpperCase();
        }
    }
    return switchedStr;
}
console.log(switchCase('OrAnGe') + " is modifed string");

//3 capitalizes each word's first letter, removes all spaces 
function toCamelCase(str) {
    let words = str.split(' ');
    let camelCaseStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    return camelCaseStr;
}
let input = "Coding Academy by Orange";
console.log(toCamelCase(input));

//4 removes a specific element in an array. 
function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}
let array = ["Coding", "Academy", "By", "Orange"];
let elementToRemove = "By";

let result = removeElement(array, elementToRemove);
console.log(result);

//5  Write a function that checks if a number is odd or even. 
let number = prompt('Enter a number to check if odd or even!')
console.log(oddOrEven(number));

function oddOrEven(number) {
    let result = "";
    if (number % 2 == 0)
        result = 'even number';
    else
        result = 'odd number';
    return result;
}

//6 checks whether an input variable is a number. 
function isNumber(number) {
    return typeof input === 'number' && !isNaN(input);
}
let num = prompt('Enter a input to check if it is number')
console.log(isNumber(num));

//7 finds the largest of two numbers. 
function findLargest(num1, num2) {
    return Math.max(num1, num2);
}
console.log(findLargest(10, 30), " is Largest number");

//8  checks if a triangle is equilateral, scalene, or isosceles.
function triangleType(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return "Invalid input. Please enter numeric values for the sides.";
    }
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle sides.";
    }

    if (a == b && b == c) {
        return "Equilateral triangle";
    } else if (a == b || b == c || a == c) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 4, 3));
console.log(triangleType(3, 4, 5));
console.log(triangleType(1, 2, 3));
console.log(triangleType(3, 'a', 5));

//9 if a number is present in a given range
function isNumberInRange(startRange, endRange, numberToCheck) {
    if (startRange > endRange) {
        console.log("Invalid range!");
        return; 
    }
    if (numberToCheck >= startRange && numberToCheck <= endRange) {
        console.log(`${numberToCheck} is in the range.`);
    } else {
        console.log(`${numberToCheck} is not in the range.`);
    }
}

const startRange = parseInt(prompt("Enter the start of the range:"));
const endRange = parseInt(prompt("Enter the end of the range:"));
const numberToCheck = parseInt(prompt("Enter the number to check:"));

if (!isNaN(startRange) && !isNaN(endRange) && !isNaN(numberToCheck)) {
    isNumberInRange(startRange, endRange, numberToCheck);
} else {
    console.log("Please enter valid numbers.");
}

//10 checks whether a year is a leap year. 
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}
const year = parseInt(prompt("Enter a year to check if it is a leap year!"));
console.log(isLeapYear(year));
