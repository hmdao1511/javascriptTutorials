// 2/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 1: Function Scope

// 1. What is a function scope
// - It's basically the visibility of the variable 
// - The location where a variable is defined dictates where wehave access to
// that variable

// Example: 
function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs); // This will be print out
}

// console.log(totalEggs);     // This will give an error 


// The reason why it gives an error is because totalEggs is only within the scope of
// the function collectEggs(). We call this variable a function scope variable

// 2. Global Scope variable
// - It's the type of variable that can be used anywhere anytime in the code
// - It must exist before any invocation takes place
// Example: 
const doublePi = Math.PI * 2; // Global scope variable, can be used anywhere anytime
function multWithDoublePi(num) {
    let product = num * doublePi;
    return doublePi;
}
console.log(doublePi); // doublePi can be called
console.log(multWithDoublePi(15) / doublePi); // doublePi can be called

// 3. What happens if we redefine a global scope variable inside a function scope
let color = 'blue';
function changeToRed() {
    let color = 'red';
    console.log(color);  // red
    // red because:
    // 1: It's function scoped
    // 2: console.log() at line 38 recognizes the nearest defined variable
}
changeToRed(); 
console.log(color); // blue
// At the end, the color variable is still blue

// - It's possible to redefine a variable (global scoped) inside a function scope in
// JavaScript, but at the end, (since the redefined version is function scoped) the global
// scope variable is applied
