"use strict"

//1 concat method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

const concatedArr = array1.concat(array2);
console.log(concatedArr);

//2 slice method
let arr = [1, 2, 3, 4, 5, 6];
let new_arr = [];
new_arr = arr.slice(0, 2).concat(arr.slice(4));//1 2 
console.log(new_arr, "Slice applied");

//3 splice method
let array = [1, 2, 3, 4, 5];
array.splice(0, 1);
array.splice(1);
console.log(array, "spliced applied");

//4 using for loop
let arrayUsingLoop = [1, 2, 3, 4, 5];
let valuesOfArray = "";
for (let i = 0; i < arrayUsingLoop.length; i++) {
    valuesOfArray += arrayUsingLoop[i];
    if (i == arrayUsingLoop.length - 1)
        valuesOfArray += "";
    else {
        valuesOfArray += ", ";
    }
}
console.log(valuesOfArray, "using for loop");

//5 Using for each method
let values = [1, 2, 3, 4, 5];
values.push(6);
let str = "";
values.forEach(element => str += element);

console.log(values, "using for each method"); 