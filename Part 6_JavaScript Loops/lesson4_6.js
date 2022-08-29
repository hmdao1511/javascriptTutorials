// 29/7/2022
// Part 6: JavaScript Loops
// Lesson 4: Looping over Arrays

// 1. How to do that?
// - You make good use of the .length for setting the stoping condtion of
// the loop in order for the loop to run dynamically (be able to adapt based
// on the length of the given array)
// - You retrieve the values from the Arrays by using [] and the loop's iterator
// as an argument for those squared brackets
// Example:
const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// Alternatively, you can iterate through the array in the opposite direction
// too. Just set the starting point as the final element of the array - 1,
// using .length and iterate backwards (i-- in the example below)
for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i, animals[i]);
}
