"use strict"
//1 factorial
let val=5;
let fac=1;
for(let i=2;i<=val;i++){
    fac*=i;
}
console.log("factorial of 5 is",fac);

//2 fibonancci
let values = [];
values[0] = 0;
values[1] = 1;
let string_Of_Values="0 1";

for (let i = 2; i < 10; i++) {
    values[i] = values[i - 1] + values[i - 2];
    
    if (values[i] > 10)
        break;
    
   string_Of_Values=string_Of_Values+" "+values[i];
}
console.log(string_Of_Values);


//3 prime
function prime_numbers(num){
    for(let i=0;i<num;i++){
        
    }
}
prime_numbers(20);