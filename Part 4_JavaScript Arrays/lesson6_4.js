// 28/7/2022
// Part 4: JavaScript Arrays
// Lesson 6: More Array Methods (Part 2)

// 1. slice()
// - It's a way of getting a copy of a portion of an array
// (aka a slice of an array, just like a slice of a cake)
// - It has 2 Number parameters (second parameter is optional), the first 
// number is the beginning position where you want to start copy from. The second
// number is the "limit" index that you cannot copy from 
// Example:
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ['camel', 'duck', 'elephant']
console.log(animals.slice(1, 4)); // ['bison', 'camel', 'duck']

// 2. splice(a, b, c)
// - It changes the contents of an array by removing or replacing existing elements
// and/or adding new elements (In place)
// - Arguments: 
//      + a: index for inserting
//      + b: number of elements to be replaced
//      + c: elements to be inserted, separated by a comma ","
// Example:
let numbers = [1,2,3,4,5];
numbers.splice(0,0,0); // inserts 0 at index 0 (NO replacements)
// numbers = [0,1,2,3,4,5]
numbers.splice(5,1,6); // replace 6 with 5 in the array
// numbers = [0,1,2,3,4,6]
numbers.splice(3,2,"Hello", "Konnichiwa"); // replace 3 with "Hello", and replace 4
// with "Konnichiwa"
// numbers = [0, 1, 2, "Hello", "Konnichiwa", 6];

// 3. sort()
// - This method will sort an array:
// + If an array is of type String, it will sort the array alphabetically
// + If an array is of type Number, it will convert everything into Strings and 
// then compare them based on their UTF 16 code unit values
// - sort() doesn't sort a Number array! It's not a numeric sort
// Example:
let month = ['March', 'Jan', 'Feb', 'Dec'];
month.sort(); // month = ['Dec', 'Feb', 'Jan', 'March']
