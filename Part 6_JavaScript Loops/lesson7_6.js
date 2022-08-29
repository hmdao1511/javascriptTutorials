// 1/8/2022
// Part 6: JavaScript Loops
// Lesson7: The Break Keyword, breaking a For Loop without break???

// 1. How does break work and when do we use it
// - "break" breaks the current loop that the code's flow is currently in
// - We commonly use "break" with wild loops, for stopping the loop, or avoiding
// an infinite loop.
// Example:
let input = prompt("Say something!");
while (true) {
  input = prompt(input); // Heyyy stop copying what I say!
  // If we don't have this conditional statement below, this would have been
  // an infinite loop!
  if (input === "stop copying me") {
    break;
  }
}
alert("OK you won!");

// 2. Writing break neatly (only works if there is only the "break" keyword)
// If the inside of your breaking condition only contains the "break" keyword,
// you can write "break" in the same line of the IF statement, and that IF statement
// won't be needing any of the curly brackets {}
// Example:
let counter = 0;
while(true){
    counter++;
    console.log("Hi");
    if (counter === 10) break; // Like this
} 

// 2. Breaking a For-Loop without using break
// - Till this day I do not understand why my teachers are saying using "break"
// is bad practice. Anyways this is how you do it without "break"
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 7) {
    // This reassigns the i value to the limit of the loop, which technically
    // breaks the loop
    i = 10;
  }
}

let a  = parseInt(prompt("sduifg"));
console.log(a);
