// 2/8/2022
// Part 7: JavaScript Functions
// Lesson 4: Functions With Multiple Arguments

// 1. Syntax
// We use a comma ',' to separate arguments
// It should follow this form:
// function funcName(param1, param2, param3,...) {
//     do something
// }

// Example:
function sumThreeNums(num1, num2, num3) {
  console.log(`The sum of 3 numbers is ${num1 + num2 + num3}`);
}

sumThreeNums(1, 2, 3); // The sum of 3 numbers is 6

// Example 2:
function repeat(string, times) {
  let theString = "";
  for (let i = 0; i < times; i++) {
    theString += string;
  }
  console.log(theString);
}

repeat('hi', 5); // hihihihihi

// 2. Important Note
// When using a function with mutliple arguments, BE SURE TO BE AWARE ABOUT THE ORDER
// OF THE ARGUMENTS. Do not mess it up, or otherwise you will get undefined/error! 

// Example (Take the function repeat(string, times)) from above

// If you write repeat(times, String) when you are calling it out, it will return undefined
// or error, because it accepts a String first, and then a number, so that the loop inside 
// the function can work normally 
