// 1/8/2022
// Part 6: JavaScript Loops
// Lesson 10: Iterating Over Objects, For...In Loop!??

// 1. Iterating over Objects
// Example (we have an object like this):
const ourClass = {
    theCoolestDude: 'Tom',
    theCoolestGirl: 'Natalie',
    theGeek: 'Ian',
    theJoker: 'Ben',
    theSeriousGuy: 'Danny',
    theWhore: 'Jessica' // lmao slept with the teacher to pass Chemistry class
}

// - Suppose we want to iterate through every attribute in this Object, we cannot use 
// a traditional For Loop, nor can we use a For...Of Loop
// - However, there is a For...In Loop which allows us to do this 
// - For...In Loop is pretty uncommon these days, but it can get this job done :)
let counter = 0;
for (let student in ourClass){
    counter++;
    console.log(`Student No. ${counter}: ${student} in the class is ${ourClass[student]}`);
}

// 2. Iterating over Objects with Object methods
// Another option to iterate through the array, is to use Object methods:
// - Object.keys()  (accept an Object as an argument, this returns an array containing
// all of the keys in that argument object)
// - Object.values()  (accept an Object as an argument, this returns an array containing
// all of the values of the keys in that argument object)
// - Object.entries()  (accept an Object as an argument, this returns an NESTED array 
// containing all of the key-value pairs in that argument object)

// Example (I am interested in the sum of the students' grades):
const grades = {
    andy: 50,
    coby: 70,
    bella: 60,
    dane: 50   
}
let total = 0;
let scores = Object.values(grades);
for (let value of scores){
    total = total + value;
}
// This will print out the average mark of the class
console.log(`The average mark of the whole class is ${total/scores.length}`); 

// Of course, you can play around with other methods too:
console.log(Object.values(grades));
console.log(Object.keys(grades));
console.log(Object.entries(grades));