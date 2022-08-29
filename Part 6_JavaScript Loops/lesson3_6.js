// 29/7/2022
// Part 6: JavaScript Loops
// Lesson 3: The Perils of Infinite Loops >:(

// 1. What is an infinite loop?
// - It's a loop that does not stop
// - It eats up all memory and eventually force the browser to
// quit unexpectedly
// - Infinite Loops are BADDD because it uses up all the memory
// BADD Example:

// for (let i = 20; i >= 0; i++) {
//     console.log(i);
//     // This loop will run from 20 to infinity
//     // so DO NOT RUN THIS CODE
// }

// 2. How to avoid infinite loops?
// - Pay attention to how the loop is going to stop
for (let i = 20; i >= 0; i--) {
  // Although the condition where things stop is smaller than
  // the starting point, the incrementing expression is stating that
  // it's decreasing, so at -1 this loop will stop
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  // Stoping condition is when i reaches 21
  console.log(i);
}

for (let i = 20; i >= 20; i++) {
  // Stoping condition is when i reaches 100
  if (i === 100) {
    break;
  } else {
    console.log(i);
  }
}
