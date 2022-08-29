// 26/7/2022
// Part 2: JavaScript Strings and More
// Lesson 7: Random Numbers & The Math Object

// 1. The MATH object
// - It contains the properties and methods for mathematical
// constants and functions 
// - Some of the main constants and functions:

Math.PI // 3.14....

// Rounding a number
Math.round(4.9) //5

// Absolute value: 
Math.abs(-456) // 456

// Raises 2 to the 5th power 
Math.pow(2,5) // 32

// Removes decimal
Math.floor(3.999999999) // 3

// 2. Random numbers 
// .random() generates a number between 0 and 1
Math.random()

// But how do I generate random numbers between 1 and 10? 
// That requires a bit more work
Math.floor(Math.random() * 10) + 1
// *10 because we need to transform all the number between 0 and 1 to be within the 
// range from 0-10
// +1 because we need to make sure that for the numbers that are smaller than 
// 0.1 will always be larger than 1 (Math.floor() will turn those numbers into 0)


