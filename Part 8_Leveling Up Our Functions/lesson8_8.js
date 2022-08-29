// 3/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 8: The Mysterious Keyword 'this'

// 1. 'this' in Methods
// - Use the keyword 'this' to access other properties on the same Object
// Example (in the greet() method we want to refer to the 'name' attribute):
const Minh = {
  fullName: "Hai Minh Dao",
  occupation: "Student",
  nationality: "Vietnamese",
  greet() {
    // Use this.name to refer to the attribute 'name' of the Minh Object
    console.log(
      `Hi! My name is ${this.fullName}, I am a ${this.nationality}, and currently I am a ${this.occupation}`
    );
  },
};

// 2. Notes when using keyword 'this'
// - The value of 'this' depends on the invocation context of the function it's used in 

// Example (We use the Object Minh from above too):
const Minh2 = Minh.greet;
// - So Minh2 is now containing a Method from Minh, which makes Minh2 a function. 
// - We can see that the greet() is using the keyword 'this' to refer to the whole
// object in the Minh object. However, the 'this' expressions inside greet() inside Minh2
// will be undefined, since the location of calling 'this' is within the Object Minh2. Yet,
// Minh2 does not have any attributes => undefined will be expected

// So if we call:
Minh2(); // 'Hi! My name is undefined, I am a undefined, and currently I am a undefined'
