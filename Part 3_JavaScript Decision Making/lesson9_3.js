// 27/7/2022
// Part 3: JavaScript Decision Making
// Lesson 9: Truthy and Falsy Values 

// 1. All falsy and truthy values
// Falsy values should be the following:
// - false
// - 0
// - "" (empty String)
// - null
// - undefined
// - NaN

// Everything else is truthy!

// We can prove this truthy/falsy concept by running this example below:
const userInput = prompt("Enter something");

// If you input something, it's going to print out TRUTHY, otherwise
// if you just hit ENTER without inputting anything, it's going to 
// print out FALSY
if(userInput){
    console.log("TRUTHY");
} else {
    console.log("FALSY");
}

// If the condition is a falsy value, then it will be false
// Example:
if(0) {
    console.log("TRUTHY");
} else {
    console.log("Falsy"); // Will print out FALSY in the Console
}



