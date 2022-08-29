// 2/8/2022
// Part 7: JavaScript Functions
// Lesson 3: Function's Argument

// 1. Function can have arguments
// - We can also write functions that accept inputs, called arguments
// So I could do something like:
// greet('Timothy') --> *Computer processing the function* --> 'Hi Timothy!'   
// greet('Gnem') --> *Computer processing the function* --> 'Hi Gnem!'

// Or:
// avg(20,25) --> *Processing* --> 22.5
// avg(3,2,5,6) --> *Processing* --> 4

// We've seen functions that do/do not have arguments before:
"hello".toUpperCase(); // no input

// With arguments
// different inputs
"hello".indexOf('h'); // 0
// different outputs
"hello".indexOf('o'); // 4

// 2. Syntax
// It should follow this form:
// function funcName(param) {
//     do something   
// }

// Example (let's do the greet() command that takes the user's input)
function greet(name){
    console.log(`Hello ${name}!`);
}

// And then run it
greet('Minh'); // Hello Minh!
greet('Gnem'); // Hello Gnem!
greet('Lana'); // Hello Lana!
greet('Scott'); // Hello Scott! 

// 3. Important Note
// - If you are making a function that accepts user's input as arguments, then if
// they use your function without inputting anything, the argument will be set to 
// undefined!
// - Since we get undefined for no inputs, we can make use of this to handle user's input
// (using conditional statements with a condition for checking if it's undefined or not)