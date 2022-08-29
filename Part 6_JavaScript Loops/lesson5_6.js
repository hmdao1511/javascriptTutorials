// 29/7/2022
// Part 6: JavaScript Loops
// Lesson 5: Nested Loops

// 1. How it works
// Example:
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
// The output will be:
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2

// Use Nested Loops if you need to, it's not a JavaScript dedicated feature, but it's
// more like a general concept that you can use for every programming languages

// 2. Nested Loops with Arrays
// Example:
const seatingChart = [
  ["Albert", "Ben", "Carl"],
  ["Danny", "Ethan", "Francisco"],
  ["Gaben", "Hayley", "Ian"],
];

for (let i = 0; i < seatingChart.length; i++) {
  console.log(`ROW ${i + 1}:`); // Having ROW 0 doesn't really make sense, does it?

  for (let j = 0; j < seatingChart[i].length; j++) {
    console.log(`   ${seatingChart[i][j]}`);
  }
}
// Output:
// ROW 1:
//     Albert
//     Ben
//     Carl
// ROW 2:
//     Danny
//     Ethan
//     Francisco
// ROW 3:
//     Gaben
//     Hayley
//     Ian
