// 3/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 2: The map Method

// 1. What is it?
// - It creates a new array with the results of calling a callback on every
// element in the array
// - We use this when we want to do something for each element of the array

// 2. Syntax
// Assuming there exists an oldArray
// const newArray = oldArray.map(function(param) {
//      return .......... (result will be put into the newArray array)
// });

// Example:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Use the map Method to create a new array so that every element in the new array
// is twice as high as the numbers array. Then, let another variable contains this
// new array
const numbersDoubled = numbers.map(function (element) {
  return element * 2;
});
