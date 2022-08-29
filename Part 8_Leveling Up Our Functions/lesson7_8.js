// 3/8/2022
// Part 8: Leveling Up Our Functions
// Lesson 7: Defining Methods

// 1. Methods of an Object
// - We can add functions as properties on Objects!
// - We call them Methods!

// 2. Difference between Methods and Functions
// - A Method is a function that has been placed as a property of the Object
// - A Method is also a function, but not all functions are called Methods

// 3. Creating an Object with methods
// We know that we can make use of the Math Object, but let's create our own
// myMath object too!
const myMath = {
  PI: 3.14159,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};

// Now let's use our myMath Object!
myMath.PI; // 3.14159
myMath.square(2); // 4

myMath["cube"](3); // 27
// This notation of calling out Methods works the same as the dot notation, but not
// used as often as the dot notation

// 4. IMPORTANT: Shorthand for creating an Object with methods
const minhMath = {
  blah: "Hi!",
  PI: 22 / 7,
  // This is the shorthand of defining a method
  add(x, y) {
    return x + y;
  },
  subtr(x, y) {
    return x - y;
  },
  mult(x, y) {
    return x * y;
  },
  div(x, y) {
    return x / y;
  },
};
