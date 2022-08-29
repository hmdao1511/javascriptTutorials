// 2/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 5: Higher Order Function

// 1. What is it?
// - Functions that operate on/with other functions
// - They can:
//      + Accept other functions as arguments
//      + Return a function

// 2. Functions as arguments 
// - This concept is about passing a function as an argument to another function
// - This is similar to invoking functions indirectly, but we can do lots of things
// with it
// Example: 
function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log('HAHAHHAHAHAHAHA');
}
callTwice(laugh); // This method expect a name of a function 
// 'HAHAHHAHAHAHAHA'
// 'HAHAHHAHAHAHAHA'