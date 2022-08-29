// 28/7/2022
// Part 4: JavaScript Arrays
// Lesson 8: Arrays + Constant

// Arrays with const are fairly interesting...

// Example: We have a constant array
const colors = ['red', 'green', 'blue'];
// Since it's constant by birth, you cannot reassign it, since doing that will
// change the reference of the array in the computer's memory

// colors = ['brown', 'yellow'];    Yeah you cannot do that

// But, you can "technically" change the array by using the array 
// manipulation methods that we've learned earlier. This works because you are
// only altering the inside of the array, its reference in the memory still remains
// unchanged

// push(), pop(), shift(), unshift(), splice(), reverse(),   You name it

colors.shift(); // remove 'red' from the array
colors.unshift('brown'); // add 'brown' to the start of the array
colors.pop(); // remove 'yellow' from the array
// Now the array is: colors = ['brown', 'green'], even though it's declared constant