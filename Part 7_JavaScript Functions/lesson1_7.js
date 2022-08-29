// 2/8/2022
// Part 7: JavaScript Functions
// Lesson 1: Introduction to JavaScript Functions

// 1. What are JS functions?
// - They are essentially reusable procedures
// - It allows us to write reusable, modular code
// - We define a "chunk" of code that we can then execute at a 
// later point
// - We use them ALL THE TIME!

// 2. Why do we use it?
// Example (life without JS functions):
let die1 = Math.floor(Math.random() * 10) + 1;
let die2 = Math.floor(Math.random() * 10) + 1;
let die3 = Math.floor(Math.random() * 10) + 1;
let die4 = Math.floor(Math.random() * 10) + 1;
let die5 = Math.floor(Math.random() * 10) + 1;
let die6 = Math.floor(Math.random() * 10) + 1;
// Notice anything that's being repeated over and over again? 
// Technically it's not wrong writing like this, but if the code is complex and long
// then it's not sensible to write it this way
// We need to find a shorter way of implementing all of these
// That said, we could do something like: let die1 = rollDice();  it's shorter that way

// Example (life with JS function)
// - We could create a function rollDice() that does the Maths for us
// - Then we can just write: let die1 = rollDice(); and the same thing applies to all
// other dices too 
// - We can also make use of the fact that functions have their parameters, so we can 
// create a function that works dynamically. For example, we can make the rollDice() 
// parameter to indicate the number of sides that the die has!

// We will find out about the syntax next lesson!


