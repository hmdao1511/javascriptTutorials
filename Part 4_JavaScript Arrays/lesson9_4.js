// 28/7/2022
// Part 4: JavaScript Arrays
// Lesson 9: Multi-Dimensional Arrays

// 1. Nested Arrays
// You can store arrays wherever we want, even inside another array!
// Example:
let colors = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden rod'],
    ['green', 'olive'],
    ['blue', 'navy blue'],
    ['purple', 'orchid']
]

// 2. Accessing elements in nested arrays
// - You need to go through different layers of the array, if it's 
// multi-dimensional
// - For example, if it's a 2D-Array, then you use [][] (double squared brackets)
// - If it's 3D, then use [][][]
// And so on....

// Example:
console.log(colors[1][1]); // Will print out 'dark orange' in the Console