// 28/7/2022
// Part 4: JavaScript Arrays
// Lesson5: More Array Methods (Part 1)

// 1. concat()
// - Merge 2 arrays into a single array, with the second array as an argument 
// Example: 
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
// array3 = ['a', 'b', 'c', 'd', 'e', 'f']

// 2. includes()
// - Returns a boolean value, checking if an array contains a particular value
// Example:
const array4 = [1,2,3];
console.log(array4.includes(1)); // returns true
console.log(array4.includes("Hello")); // returns false

// 3. indexOf()
// - Requires an argument in the parentheses , it will return an integer 
// stating the index (position) of the argument in a thing (that's using this Method)
// - It returns -1 if the argument cannot be found
// Example:
let color = "Blue";
color.indexOf('u'); // returns 2
color.indexOf('a'); // returns -1 because the letter 'a' does not exist

// We can use this method to find out the element's position in an array too
let dogs = ["Huskies", "Bulldog", "Golden Retriever", "Shiba Inu"];
dogs.indexOf("Shiba Inu"); // returns 3

// 4. reverse()
// - It reverses an array (In place)
// Example:
let transportation = ['Bicycle', "Unicycle", "Bike", "Car"];
transportation.reverse(); // transportation = ["Car", "Bike", "Unicycle", "Bicycle"]

