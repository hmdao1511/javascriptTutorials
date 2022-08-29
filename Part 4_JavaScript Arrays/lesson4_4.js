// 27/7/2022
// Part 4: JavaScript Arrays
// Lesson 4: Shift & Unshift

// 1. shift()
// - It's used to remove the first element from the array, and
// carries the element that has been deleted just now 
// Example:
let names = ["Tom", "Nancy", "John"];
// Remove the first element ("Tom")
names.shift(); // names = ["Nancy", "John"]

// You can assign the carried value in the .shift() method to a variable
let removedName = names.shift();  // removedName = "Nancy"

// 2. unshift()
// - It's used to insert the argument in its parentheses to the beginning 
// of the array
// - It accepts multiple arguments too
names.unshift("Danny", "Jane"); 
// names = ["Danny", "Jane", "John"]


