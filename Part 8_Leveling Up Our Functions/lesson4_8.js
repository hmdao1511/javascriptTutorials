// 2/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 4: Function Expressions

// How this works
// - This is another different way of defining a function
// using = operator
// - This is similar to something that we called "anonymous function"
// the function is invoked by the name of a variable (usually "const", we can use "let" too),
// because the function does not have a name

// Example:
const add = function (x, y) {
  return x + y;
};
add(1, 2); // 3

// This is the same as writing:
// function add(x, y){
//      return x + y;
// }
