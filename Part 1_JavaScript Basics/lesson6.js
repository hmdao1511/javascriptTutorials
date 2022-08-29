// 25/7/2022
// Part 1: JavaScript Basics!
// Lesson 6: Const and Var

// 1. const
// - "const" works just like "let", except you cannot change the value!
// - const's value cannot be reassigned, either!
// Examples:
const age = 17;
age = age + 1; // ERROR! YOU ARE IN TROUBLE!! I'M TELLING MOM!!

const hens = 4;
hens = 20; // ERROR!

// 2. Why TF do we use CONST???
// - Once we cover Arrays and Objects, we'll see other situations where "const"
// makes sense over "let"
// - For now we just use "const" for values that will always remain unchanged, like:
const pi = 3.14;
// or:
const daysInWeek = 7;

// 2. var 
// - This is the old variable keyword for registering a variable
// - Before let and const, var was the only way of declaring variables. But 
// these days, there isn't really a reason to use it.
// - For now let's not talk about why we don't use this keyword anymore, just 
// remember that this works similarly to the keyword "let"

// Example:
var numberOfBoats = 10;
// We can change the value of "var" just like how we did to "let"
numberOfBoats = 20; // now numberOfBoats contains the value 20
numberOfBoats -= 15; // numberOfBoats has gone down from 20 to 5!



