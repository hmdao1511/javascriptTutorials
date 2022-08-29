// 2/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 6: Higher Order Function (Part 2)

// Recall the explanation of Higher Order Function:
// - Functions that operate on/with other functions
// - They can:
//      + Accept other functions as arguments
//      + Return a function

// Returning a function
// - Note that you have to store this returned function in a variable!
// - The parent function of this concept sometimes can be called as the factory function
// Example 1:
function checkOddOrEven(num) {
  if (parseInt(num) % 2 === 0) {
    return function () {
      console.log("This number is an even number!");
    };
  } else if ((parseInt(num) + 1) % 2 === 0) {
    return function () {
      console.log("This number is an odd number!");
    };
  } else if (isNaN(parseInt(num))) {
    return function () {
      console.log("Not a Number!");
    };
  }
}

let result = checkOddOrEven(20); // Receive the function returned from checkOddOrEven()
result(); // Invoke the function

// Example 2:
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 17);
isChild(5); // true
const isAdult = makeBetweenFunc(18, 65);
isAdult(16); // false
const isSenior = makeBetweenFunc(66, 120);
isSenior(80) // true



