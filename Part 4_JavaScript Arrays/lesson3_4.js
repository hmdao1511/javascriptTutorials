// 27/7/2022
// Part 4: JavaScript Arrays
// Lesson 3: Push & Pop

// 1. push() and pop()
// - Push: allows us to add an element to the end of the array
// - Pop: allows us to remove an element at the end of the array
// Example:
let names = ["Tom", "Nancy"];
// Pushing "John" to the array, with the argument as a String
names.push("John");
// Now the array is: names = ["Tom", "Nancy", "John"]

// push() can also have multiple arguments at a time
names.push("Danny", "David", "Jerry"); 
// names = ["Tom", "Nancy", "John", "Danny", "David", "Jerry"]

// Removing the last element of the array ("Jerry")
names.pop(); // Now Jerry disappeared from the array