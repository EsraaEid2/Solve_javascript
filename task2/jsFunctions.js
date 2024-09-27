"use strict"

//1 display the smallest value in the array
function displaySmallestVal(array) {
    let smallestValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestValue) {
            smallestValue = array[i];
        }
    }
    return (smallestValue);
}

//2 return your string in Alphabetical order
function returnAlpha(str) {
    let charOfStr = str.split('');
    charOfStr.sort();
    let modifiedStr = charOfStr.join('');
    return modifiedStr;
}


//3 Return how many words was given
function countWords(str) {
    if (str.trim() === "") {
        return 0;
    }

    //using a regular expression(rejex)
    const words = str.trim().split(/\s+/);
    return words.length;
}

//4  Multiply all elements in an array by it's length
function multiplyArrayByLength(arr){
    let lengthOfArray=arr.length;
    for(let i=0;i<lengthOfArray;i++){
        arr[i]*=lengthOfArray;
    }
    return arr;
}

//5 will repeat each string character two times

function doubleChar(str){
    let modifiedStr="";
    for(let i=0;i<str.length;i++){
        modifiedStr+=str[i].repeat(2);
    }
    return modifiedStr;

}

console.log(displaySmallestVal([30, 45, 60, 7]) + " is smallest value in array");
console.log(returnAlpha('hello'), "order the string in alpha order");
console.log(countWords('hello from CodingAcademy!'), "number of words in string");
console.log(multiplyArrayByLength([4,2,5]));
console.log(doubleChar('Coding'));



