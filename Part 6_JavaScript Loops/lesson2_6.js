// 28/7/2022
// Part 6: JavaScript Loops
// Lesson 2: More For Loops Examples

// 1. Modifying the incrementing expression
// - You can change the incrementing expression so that it has the effect
// that you want
// Example:
// I want to print out all even integers from 0-20
for (let i = 0; i <=20; i += 2) {
    // I am adding 2 to i each time the code is iterated
    console.log(i); // Printing out all even numbers from 0-20
}

// 2. Modifying the starting point of the For Loop
// - You can change the starting point of the loop by changing the starting index
// Example:
// I want to print out all odd integers from 5-25
for (let i = 5; i <= 25; i += 2) {
    // The loop starts at i = 5 and ends at i = 25
    console.log(i); // Printing out all odd numbers from 5-25
}

// 3. Making the Loop counting down
// For this the starting point must be the highest position, the condition must stop 
// at a point where it's lower than the starting point, and we use -- or -= to count
// down
// Example:
for (let i = 100; i >= 0; i--) {
    console.log(i); // Printing from 100 down to 0 
}