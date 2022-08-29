// 1/8/2022
// Part 6: JavaScript Loops
// Lesson 9: The Lovely For...Of Loop

// 1. What is it and why do we use it?
// - It is actually similar to a traditional For Loop, but its syntax is shorter
// - We usually use this For...Of Loop when we want to iterate through an array

// 2. Syntax
// It should follow this form:
// for (variable of iterable) {
//      statement
// }

// 3. Example of using For...Of Loop over For Loop
// * Traditional For Loop:
const students = ["danny", "tom", "suzy", "lucy", "maria"];
for (let i = 0; i < students.length; i++) {
  console.log(`Student number ${i + 1}: ${students[i]}`);
}
// What if we can make this looks shorter?

// * For...Of Loop
let counter = 0;
for (let names of students) {
  counter++;
  console.log(`Student number ${counter}: ${names}`);
}

// 4. For...Of Loop for multi-dimensional arrays
// Example (2D array):
const seatingChart = [
  ["Abe", "Bane", "Cody"],
  ["Daniel", "Emma", "Finn", "Gabriel"],
  ["Hanna", "Ian", "James"],
];
// We will get access to the elements like this:
let i = 0;
for (let row of seatingChart) {
  i++;
  console.log(`Row ${i}`);
  for (let name of row) {
    console.log(`   ${name}`);
  }
}

// 5. For...Of Loops on String
// This prints out every single character in the String below
for(let char of "Hello World!"){
    console.log(char); 
}
