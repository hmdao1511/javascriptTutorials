// 3/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 1: The forEach Method

// How is it used?
// - It accepts a callback function, and calls the function once per
// element in the array

// Example:
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using forEach to invoke a function that prints out the even element only for
// each element in the array
number.forEach(function (element) {
  if (element % 2 === 0) {
    console.log(element);
  }
});

// Harder example:
const grades = [
  {
    name: "Andy",
    mark: 92,
  },
  {
    name: "Ben",
    mark: 80,
  },
  {
    name: "cindy",
    mark: 86,
  },
];
// We want to use forEach to print out the name of the student, followed by
// their mark out of 100 (.../100)
grades.forEach(function (student) {
  console.log(`${student.name} - ${student.mark}/100`);
});
// Andy - 92/100
// Ben - 80/100
// Cindy - 86/100
