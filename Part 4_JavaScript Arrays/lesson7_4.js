// 28/7/2022
// Part 4: JavaScript Arrays
// Lesson 7: Reference Types & Equality Testing 

// 1. You cannot compare arrays in JavaScript???
// JavaScript doesn't care about the contents within the array, it only
// cares about the references in memory of the computer
// So it's pointless to compare 2 arrays with == or ===
['hi', 'bye'] == ['hi', 'bye']; // false
['hi', 'bye'] === ['hi', 'bye']; // false too

// This kind of array comparing is only possible if two arrays are pointing
// to the same reference, technically speaking
let numbers = [1,2,3];
let numbersCopy = numbers;
numbersCopy == numbers; // True
numbersCopy === numbers; // True