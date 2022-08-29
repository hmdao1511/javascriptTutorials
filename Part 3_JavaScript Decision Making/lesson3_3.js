// 26/7/2022
// Part 3: JavaScript Decision Making
// Lesson 3: Console, Alert & Prompt

// 1. console.log()
// - This prints the argument inside the parentheses to the console
// - We need this if we are going to start working with files
// Example:
console.log("Hello World!"); // Prints out "Hello World!" int he console

// 2. alert()
// - This prints out the argument inside the parentheses as a window pop-up
// Example: 
alert("Hello"); // Generates a popup that says "Hello"

// 3. prompt()
// - This works exactly the same as alert(), but it's also going to 
// accept an argument input from the user 
// Example:
prompt("Enter your name"); 
// - Generates a popup that says "Enter your name" and a textfield for the 
// user to input 
// - The input that the user puts in will be saved as a String  
// - Normally the input will be saved into a variable for other purposes too
// Example:
let yourName = prompt("Enter your name");
console.log(`Your name is ${yourName}`);

// 4. parseInt()
// This method converts a String to a Number type, if that String is a number 
// Example (calculating the area of a rectangle):
let widthOfRectangle = prompt("Enter the width of the rectangle:");
let heightOfRectangle = prompt("Enter the height of the rectangle");
alert(`The area of this rectangle is ${parseInt(widthOfRectangle) * parseInt(heightOfRectangle)}`);




