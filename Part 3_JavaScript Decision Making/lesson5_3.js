// 26/7/2022
// Part 3: JavaScript Decision Making
// Lesson 5: If Statements

// 1. If Statements
// - Only executes the code if given condition is true
// - If the condition in the parentheses is false, the code inside
// that If statement will not be executed (skipped)
// Example:
// Keep reloading the page (using Google Chrome to run the HTML file) 
// to change the outcome of the randomNumber
let randomNumber = Math.random();
if (randomNumber < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
    console.log(`YOUR NUMBER IS ${randomNumber}`);
}

if (randomNumber >= 0.5) {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
    console.log(`YOUR NUMBER IS ${randomNumber}`);
}

