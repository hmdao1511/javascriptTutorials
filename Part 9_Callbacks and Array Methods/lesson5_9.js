// 3/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 5: setTimeout and setInterval

// 1. setTimeout(func, time)
// - This method calls a function after a number of milliseconds
// - 1 second = 1000 milliseconds
// - Accept 2 arguments:
//      + func is the function will be called after a specific amount of time delay
//      + time is the number of milliseconds before the function is invoked

// Example:
console.log('Hello!');
setTimeout(() => {
    // This will be printed out after 3 seconds
    console.log('...are you still there?');
}, 3000);

// 2. setInterval(func, time)
// - This method calls a function at specified intervals (in milliseconds)
// - The setInterval() will initially wait for the specified time to pass through,
// then it starts executing the code
// - It keeps calling the function until either clearInterval() is called, or the window 
// is closed

// Example: 
const randNum = setInterval(() => {
    console.log(Math.random());
}, 2000);

// Use clearInterval(randNum) to stop the setInterval()