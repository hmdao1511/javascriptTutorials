// 1/8/2022
// Part 6: JavaScript Loops
// Lesson 8: Writing a number guessing game!

// Rules:
// - First off, the user will input a max number to indicate the games difficulty
// (the limit number of the game will be that user's input)
// - Then the user can make their guesses, a counter will be there to count how
// many guesses have you been making, and at the end it will indicate how much guesses
// have you made before winning the game
// - If there guess is correct, stop the game and show the total number of guesses. If
// not then:
//      + If their guess is higher than the winning number, alert them that their guess
// is higher than the winning number
//      + If their guess is lower than the winning number, alert them that their guess
// is lower than the winning number

// Useful methods needed for constructing this game:
// - parseInt()    (accept a String argument and transform it into a Number, if String
// cannot be parsed this will instead return NaN)
// - Math.floor()    (accept a Number as an argument and rounds it to the nearest Integer)
// - Math.random()   (randomly generates a number between 0 and 1)
// NOTE: You use Math.floor(Math.random() * limit) + 1 to generate numbers
// between 1 and the limit

// -----------------------Let's do this!-------------------------------------------
// Step 1: Ask the user for the maximum number, also think about the case where the
// user does not enter a number, as well as whether they want to stop playing!
let guess = "";
let counter = 0; // for keeping track of how much guesses have been made
let maximum = prompt("Enter the maximum number!");
// Remember, NaN from the parseInt() is a false value, so we can make use of it for
// the While Loop's condition for keeping it running
while (!parseInt(maximum)) {
  // If the user wants to quit, then assign maximum to 'quit' and stop the game
  if (maximum.toLowerCase().includes("stop")) {
    guess = maximum = "quit";
    break;
  }
  maximum = prompt("Enter a valid number!");
}
const targetNum = Math.floor(Math.random() * parseInt(maximum)) + 1;
// --------------------------------------------------------------------------------
// Step 2: Let the users enter their guesses

if (maximum !== "quit") {
  guess = prompt("Enter your first guess!");
  while (parseInt(guess) !== targetNum) {
    // Increase the counter because the user is guessing
    counter++;
    // Check if user entered an invalid input
    if (isNaN(parseInt(guess))) {
      // if the player entered something about 'stop', stop the game
      if (guess.includes("stop")) {
        // assign the variable guess to 'quit' for the final conidtional statement
        guess = "quit";
        break; // stop the loop = stop the game
      } else {
        // if it's not related to stop, ask the user to enter a valid input again
        guess = prompt(
          `Not a valid number! Enter your guess again! No. of guesses made: ${counter}`
        );
      }
    } else {
      // If it's a valid input, check if it's higher or lower than the target number
      if (parseInt(guess) < targetNum) {
        guess = prompt(
          `Too Low! Enter your guess again! No. of guesses made: ${counter}`
        );
      } else if (parseInt(guess) > targetNum) {
        guess = prompt(
          `Too High! Enter your guess again! No. of guesses made: ${counter}`
        );
      }
    }
  }
}

// --------------------------------------------------------------------------------
// Step 3: Final alert (either by quitting or winning)

// If the player decided to quit, this will check if the variable guess = 'quit' from
// above or not. Otherwise, they must have won!
if (guess === "quit" || maximum === "quit") {
  alert("Thank you for playing!");
} else {
  counter++;
  alert(
    `You won! The number is indeed ${targetNum}! You've made ${counter} guesses.`
  );
}
