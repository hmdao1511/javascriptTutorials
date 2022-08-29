// 27/7/2022
// Part 4: JavaScript Arrays
// Lesson 2: Accessing Array Elements

// 1. Arrays are indexed
// That's right, each element in the array has a corresponding
// index (counting starts at 0) 
let colors = ["red", "orange", "yellow", "green"];

colors.length // 4

colors[0] // "red"
colors[1] // "orange"
colors[2] // "yellow"
colors[3] // "green"
colors[4] // undefined (because the length of the array is just 4)

// 2. Accessing an element in an array
// To do that, we must have an existing array in advance, then
// use the [] (squared brackets) after the name of the array, and finally
// put the index number in those brackets to find the element in that position
// Example:
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
let myFavoriteDayOfTheWeek = days[5]; // Saturday, of course.....

// You can also get access to a single letter of a String in an array like this:
let theFirstLetter = days[3][0]; // T 
// Note that this is only possible if the data type of that element is a String

// 3. Modifying an array
// Example: You have an array of pets like this 
let pets = ["cat", "dog", "lion", "bird"];
// Now, since a lion is not suitable for being a pet (unless you 
// want it to be your pet, but I'll pass XD), we want to change that second
// element of the array to a hamster. In that case, we just need to call that
// element out and reassign it to a new value
pets[2] = "hamster";
console.log(pets[2]); // Now "hamster" will be displayed instead of "lion"

// You can also "technically" add an elements which its index is even higher
// than the length of the array. But that means between the previous final element
// and the new element will be empty elements
// Example:
pets[6] = "turtle";
console.log(pets); 
// Now the array will be:
// pets = ["cat", "dog", "lion", "bird", EMPTY x 2, turtle]
// And the length of pets has gone up to 7
// Of course, those EMPTY elements will be of type undefined  

// 4. Adding an element to an array (not the best way)
// We need to:
// - Find out the current highest index of the array
// - Add that new element to the array by reassigning the value
// which its index is one position higher than the highest index

// Example:
let names = ["Anna", "John", "Scott"];
// Highest index of the array is currently 2, so we make use of the 3rd index
names[3] = "David";
// Now the array would look like this:
// names = ["Anna", "John", "Scott", "David"]

// (Note that this is not the best way to add a new element to an array, so
// we will learn another better way next lesson!)