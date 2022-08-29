// 25/7/2022
// Part 2: JavaScript Strings and More
// Lesson 2: Indices and Length

// 1. String are indexed
// - Each character from a String has a corresponding index (a positional number)
// - That positional number goes from the beginning of the String, starting at 0
// Example:
let animal = "chicken";
// c at 0
// h at 1
// i at 2
// c at 3
// k at 4
// e at 5
// n at 6 

// 2. Basic String commands
// - To know what the character is used in a particular index of a String, 
// use the square brackets after the name of the String, and then put the index number
// of the String that you want to find out what character is used
// Example: 
let snack = "chocolate"
let firstLetterOfSnack = snack[0]; // snack[0] = "c"

// - To find out the length of the String, you use the .length command (it's a 
// String's property) 
// Example:
let lengthOfTheSnack = snack.length; // snack.length = "chocolate".length = 9

// 3. String concatenation using + operator
// - If two Numbers are next to the + operator, then it will add the two numbers together,
// but if two Strings are next to the + operator, then it will concatenate those two 
// Strings

// Example:
let hihiharhar = "hihi" + "harhar"; // Will become "hihiharhar"

// Another example:
let firstName = "Minh";
let middleName = "Hai";
let surname = "Dao";
let myFullName = surname + " " + middleName + " " + firstName; // Dao Hai Minh

// - Special Case: If a Number and a String are next to the + operator, JS will 
// automatically understand that you are performing String concatenation
// Example:
let theString = 1 + "hello" // 1hello 

// 4. String concatenation using commas "," (for console.log())
// - Strings in JavaScript can be linked with commas (Just like in Python) 
// - This is only possible if you are using console.log() !
// - If you use commas to separate the Strings, there will be space between 
// them by default
// Example:
console.log('Hello', 'my', 'name', 'is', 'Minh'); // Hello my name is Minh