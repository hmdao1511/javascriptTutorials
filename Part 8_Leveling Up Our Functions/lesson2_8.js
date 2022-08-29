// 2/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 2: Block Scope

// 1. What is Block Scope
// - Block refers to basically anytime you see those curly brackets {} 
// except for a function (switch, Conditional Statments, Loops,etc)
// Example:
let radius = 8;
if (radius > 0){
    const PI = 3.14159;
    let msg = 'HIII';
}

console.log(radius); // Works normally, because it's a global scoped variable
// console.log(radius); 

// In the example above, the PI and the msg variable can only used within that 
// block (IF statement). We call them block scoped variables

// 2. The real reason why we don't use var (compared to let and const) nowadays
// - This Scope concept avoids variables created in a block/function leaks out 
// - But if you are defining a variable using var, it's gonna become a global scoped 
// variable

// REMEMBER: Everything is defined with var BECOMES A GLOBAL SCOPED VARIABLE