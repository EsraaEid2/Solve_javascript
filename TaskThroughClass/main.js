//Create an object represents you
//have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
"use strict"
function person_info(f_name, l_name, age, dob, fav_food, fav_movie) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.age = age;
    this.dob = dob;
    this.fav_food = fav_food;
    this.fav_movie = fav_movie;
}
let Esraa = new person_info("Esra'a", "Eid", 21, "20-10-2002", "mansaf", "world for example");

console.log(Esraa);

//Using the varabile persons
//Create a function called firstName
//that accept an object
//and return all the first name of the person insides

//Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
const persons = function firstName(object) {
    return object.f_name;
}

console.log(persons(Esraa));
