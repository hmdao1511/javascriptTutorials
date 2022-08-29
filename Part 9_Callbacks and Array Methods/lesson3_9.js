// 3/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 3: Arrow Functions

// (This is a newer syntax for defining functions)
// 1. Syntax

// const yourFunction = (param) => {
//      ---Your code goes here---
// }

// Examples
const add = (x, y) => {
  return x + y;
};

const sqr = (x) => {
  return x * x;
};

// 2. Arrow functions with no parameters
// - We just need to put an empty parentheses next to the arrow
// Example:
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
