let orange = "welcome to orange";

let output1 = orange.toUpperCase();
console.log(output1);//WELCOME TO ORANGE

let to_word = orange.substring(8, 10).toUpperCase();
console.log(to_word);//TO

let replaced_orange = orange.replace("welcome to", "Hello from");

console.log(replaced_orange);//Hello from orange

console.log(output1.toLowerCase());//welcome to orange

console.log(orange.length);//17

console.log('Welcome to"Orange"');

let orang_state = "Welcome to Orange" + " " + "Jordan"
console.log(orang_state);

//2
let word = "cactus";
let val = word[0];
let replaced_word = val;

for (let i = 1; i < word.length; i++) {
    if (word[i] == val) {
        replaced_word += '*';
    } else {
        replaced_word += word[i];
    }
}

console.log(replaced_word);



