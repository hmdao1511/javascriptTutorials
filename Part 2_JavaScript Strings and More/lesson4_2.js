// 25/7/2022
// Part 2: JavaScript Strings and More
// Lesson 4: String Methods with Arguments

// 1. Overall syntax
// Form: thing.method(arg)
// - Some methods accept arguments that modify their behavior. Think of them as
// inputs that we can pass in. We pass these arguments inside of the parentheses.

// 2. Finding the (starting) index of a String by using .indexOf() 
// Example:
let tvShow = "catdog";

tvShow.indexOf("cat"); // 0 (at index 0)
tvShow.indexOf("dog"); // 3 (at index 3)
tvShow.indexOf("z"); // -1 (not found)

// 3. Slicing the String with .slice()
// .slice() allows you to remove and take out a part of the String.
// Example:
let str = "supercatadulepfield Gaiturisman";
str.slice(0,5); // "super"
str.slice(5); // "catadulepfield Gaiturisman"

// 4. Replace a part of a String by using .replace()
// Example:
let annoyingLaugh = "teehee so funny! teehee";
annoyingLaugh.replace("teehee", "haha"); // "haha so funny! teehee"
// "teehee" in annoyingLaugh will be replaced with "haha", note that only the 
// first "teehee" is replaced

// 5. Repeat the String with .repeat()
// Example:
let unstoppableLaughing = "lol".repeat(5); // "lollollollollol"