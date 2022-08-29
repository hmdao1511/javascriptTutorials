// 4/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 8: The Notorious Reduce Method

// 1. What does it do?
// - It executes a reducer function on each element of the array, resulting
// in a single value

// Syntax
// const theValue = [*An array*].reduce((accumulator, currentValue) => {
//      ---Your code goes here---
//      Must return something at the end of the code (A single value)
// }, initialValueForTheAccumulator (optional) );

// Example 1 (Summing an array):
const sum = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // sum = 35

// Analysis of this function:
// First call:
//      Accumulator = 3; currentValue = 5; return value = 8
// Second call:
//      Accumulator = 8; currentValue = 7; return value = 15
// Third call:
//      Accumulator = 15; currentValue = 9; return value = 24
// Fourth call:
//      Accumulator = 24; currentValue = 11; return value = 35

// Example 2 (summing an array where the starting value of the accumulator is specified)
const listOfNumSum = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100); // listOfNumSum = 135

// 2. Finding min/max element of an array using reduce Method
const num = [12, 3214, 1256, 2435, 12321, 1236, 21, 324, 234, 234, 3424, 312];
const smallestNum = num.reduce((min, num) => {
  if (num < min) {
    // change '<' to '>' to find the max element of the array
    return num;
  }
  return min;
});

// 3. Reduce with Object nested Array
// Example (We want to find the name of the student whose grade is the worst
// of the class)
const gradeClass = [
  {
    name: "tammy",
    mark: 90,
  },
  {
    name: "jack",
    mark: 57
  },
  {
    name: "andy",
    mark: 71,
  },
  {
    name: "ben",
    mark: 68,
  },
];

const theWorstStudent = gradeClass.reduce((accumulator, currentValue) => {
    if(currentValue.mark < accumulator.mark){
        return currentValue;
    }
    return accumulator;
})

console.log(theWorstStudent.name);