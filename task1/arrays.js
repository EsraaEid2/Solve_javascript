"use strict"
//task 1

let arr1=['Coding','Academy','By','Orange'];
arr1[4]='Jordan';//jordan added to the array
console.log(arr1,"output 1");

let arr2=['Coding','Academy','By','Orange'];
console.log(arr2[0]+" " +arr2[1],"output 2");//coding academy

let arr3=['Coding','Academy','By','Orange'];
let output3 = ["Welcome", "To", ...arr3];
console.log(output3,"output 3");

let arr4=['Coding','Academy','By','Orange'];
let output4=arr4.slice(1);
console.log(output4,"output 4");

let arr5=['Coding','Academy','By','Orange'];
let output5=arr5.join(' ');
console.log(output5,"output 5");

let arr7=['Coding','Academy','By' ,'Orange'];
console.log(arr7,"output 6");

let arr6=['Coding','Academy','By','Orange'];
arr6.splice(1,2);
console.log(arr6,"output 7");


//task2 
var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop();
console.log(vegetables,"remove last item");

fruit.shift();
console.log(fruit,"remove the 1st item");

var index_of_orange=fruit.indexOf("orange");
console.log(index_of_orange,"index_of_orange");

fruit.push(index_of_orange);
console.log(fruit,"1 added to array");

console.log(vegetables.length);

vegetables.push(vegetables.length);
console.log(vegetables,"length added to vegetables array");

var food=fruit.concat(vegetables);
console.log(food,"food array");

food.splice(4,2);
console.log(food,"remove 2 elements from food array");

food.reverse();
console.log(food,"food array is reversed");

var food_toString=food.toString();
console.log(food_toString);



