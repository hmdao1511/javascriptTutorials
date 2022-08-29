// 4/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 6: The filter Method

// 1. What is it?
// - It's a method that creates a subset/filered array from a bigger array
// based on the filtering condition

// 2. How to use it
// Example:
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Now we want to create a new array (based on the num array above) that contains only
// odd numbers
const oddNum = num.filter((n) => {
  // This callback returns all odd numbers from num array to the oddNum array
  return n % 2 === 1;
});

// And, we want to filter out any number that's higher than 5
const smallNums = num.filter((n) => n <= 5);

// 3. Using filter with object nested array
// - It will return an array of objects
// Example:
const gradeClass = [
  {
    name: "tammy",
    mark: 90,
  },
  {
    name: "jack",
    mark: 57,
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

// Now we want an array containing students with their mark higher than 70
const greatStudents = gradeClass.filter((student) => {
  return student.mark >= 70;
});

// 4. Combining map and filter
// - As we have known, the greatStudents array above is containing Objects after
// filtering the gradeClass array
// - But what if we just want an array containing the name of the students rather than
// the object student?
// => This is when we use map (after using filter)
const greatStudentsName = greatStudents.map((student) => student.name);

// We can also merge the two actions of map and filter into a single line of code
const badStudentsName = gradeClass
  .filter((student) => student.mark < 70)
  .map((student) => student.name);
