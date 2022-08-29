// 29/7/2022
// Part 6: JavaScript Loops
// Lesson 6: While Loops

// 1. What is a While Loop?
// - It's another type of Loop, that continues running as long as the
// test condition (in the parentheses) is true

// 2. Syntax
// while(
//     [condition that keeps the loop running]
// ) {
//     .....your code goes here.....
//     // Also need to think of a way to stop the while loop, in
//     // order to prevent infinite loops
// }

// Example:
let num = 0; // Starting point (optional if the condition doesn't involve a number)
// This means the stoping point is num = 5
while (num < 5) {
  console.log(num);
  num++; // incrementing num value
}
// Output:
// 0
// 1
// 2
// 3
// 4

// 3. Let's make a game with While Loops!
// We are making a game called: Guess the Number
// Rules: Guess the randomly generated number, if the guess is higher/lower than the
// goal then show an alert and ask the player to try again. Else, if the guess matches
// the goal then the player wins

// To make the generated number lies between 1 and 100
const GOAL = Math.floor(Math.random() * 100) + 1; 
// Set a boolean variable for the While Loop
let checkIfWon = false;
// Start the game
let guess = prompt("Enter the secret number (between 1 and 100)");
// The game will still continue if the boolean variable is still false, unless
// either the player won or gave up (in those case the variable will be set to true
// to stop the loop)
while (checkIfWon == false) {
  if (parseInt(guess) < GOAL) {
    guess = prompt("Try again, your number is lower than the goal");
  } else if (parseInt(guess) > GOAL) {
    guess = prompt("Try again, your number is higher than the goal");
  } else if (guess == GOAL) {
    alert(`Congratulations! You won! The goal number is indeed ${GOAL}`);
    checkIfWon = true;
  } else if (String(guess).toLowerCase().includes("stop")) {
    alert("thank you for playing");
    checkIfWon = true; 
  } else {
    guess = prompt("Try again, your number is not valid!");
  }
}