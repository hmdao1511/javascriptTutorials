// 3/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 9: Using Try/Catch

// 1. What is it?
// - It's a way of handling exceptions in JavaScript, when something goes
// wrong in the code
// - The idea of this try/catch block is to grab the errors in the code and stop
// from propagating outwards and crashing the program
// - Errors make the program stop immediately, so we use Try/Catch if we still want
// the program to continue running even after detected an error

// Example:
// hello.toUpperCase()  // Error
// I forgot to put the quotes and wrapping it around the word 'hello', which results
// in an Uncaught ReferenceError in the Console

// - If we anticipate that this might be a potential error in your code, we wrap the
// suspected part of code in a Try block, followed by a Catch block to handle the error
try {
  hello.toUpperCase(); // ReferenceError
} catch (err) {
  // Handling the error. Instead of crashing the program with the errors, you
  // handle it by doing something... Only be called if something goes wrong
  console.log("The error in the code:");
  console.log(err); // This prints out the error caught by the program
  console.log("Please go check if you are using the syntax in a wrong way!");
}
// After successfully handling the error, the code flow is still not interrupted and
// the program continues to run

// This line would not have been run if we had not had a Try/Catch block above
console.log("After Error");
