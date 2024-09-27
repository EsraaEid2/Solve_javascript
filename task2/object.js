"use strict"

//1 create an object 
let person = { name: "Esra'a", age: "21", gender: "female" };
console.log(person, "before adding property");
person.major = 'sw';
console.log(person, "after adding property");

//2 using the object.values method
console.log(Object.values(person), "using the object.values method");

//3 Using the Object.entries() method 
console.log(Object.entries(person));

//create an another object
let person2 = { name: "leen", address: "madaba" };

//4 Using the Object.assign() method to merge two objects
Object.assign(person, person2);
console.log(person, "the modified object");
console.log(person2, "merge it in object 1");

//5 Use the Object.seal() method to prevent changes to an object's properties(changes to its values only)
let person3 = { name: "Ala'a", age: "34", gender: "male" };
Object.seal(person3);
console.log(Object.entries(person3), " the origin key-value of an Object");

/*person3.phone_number='07988999888';
console.log(Object.entries(person3) ," the origin key-value of an Object");
Cannot add property phone_number, object is not extensible*/
person3.name = 'Mohammad';
console.log(Object.entries(person3), " the modified can apply on values only of an Object");



