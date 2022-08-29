// 2/8/2022
// Part 7: JavaScript Functions
// Lesson 5: The Return Keyword

// 1. RETURN or NO RETURN?
// As we (may or may not) have known, there are two types of functions when it comes to
// outputting the results

// Type 1: Functions with NO RETURN
// - Those kind of functions either print values out but DO NOT return anything, or
// those functions does not need to return anything (i.e changing an internal variable)
// Example 1:
function add(x, y) {
  console.log(x + y);
}

// Since it's printing out to the console, we cannot use it like this:
// const sum = add(10,16);    // CANNOT DO THIS!
// sum; // undefined

// Example 2:
let numberIsEven = null; // let's treat this as an initial boolean value with no value
function isEven(num) {
  if (num % 2 === 0) {
    numberIsEven = true;
  } else {
    numberIsEven = false;
  }
}
isEven(10); // this changes the numberIsEven variable to true
// As you can see, this isEven() method does not return anything, it's just changing an
// internal variable's value

// Type 2: Functions with RETURN
// - Built-in methods return values when we call them
// - We can store those values
// Example:
const yell = "I will end you".toUpperCase();
// yell now contains the value "I WILL END YOU"
const idx = ["a", "b", "c"].indexOf("c");
// idx now contains the value 2

// 2. How Return works
// -  The return statement ends the function execution AND specifies the
// value to be returned by that function
// - Anything code that is written after the return statement in the function
// will be unreachable and will not be executed 

// 3. Writing our first Returning function!
function add(x, y) {
  sum = x + y;
  return sum;
}

const sumOfNum = add(69, 420);
console.log(sumOfNum); // 489 lol
