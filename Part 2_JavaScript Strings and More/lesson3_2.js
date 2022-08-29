// 25/7/2022
// Part 2: JavaScript Strings and More
// Lesson 3: String Methods

// 1. Overall syntax
// Form: thing.method()

// 2. Casing using .toUpperCase() and .toLowerCase()
// Examples:
let message = "leave me along right now i hate you plz";
message.toUpperCase(); // LEAVE ME ALONE RIGHT NOW I HATE YOU PLZ

let laughing = "LOLOLOLOLOL";
laughing.toLowerCase(); // lololololol

// 3. Trimming using .trim()
// - Trim allows you to remove unnecessary whitespaces at the beginning and at the end
// Example:
let greeting = "        Hi my name is Minh   ";
let properGreeting = greeting.trim();
// All whitespaces at the beginning and at the end are removed


// 4. Using multiple methods at a time
// Example:
let sayHi = "       hello minh!!!                ";
let properlySayingHi = sayHi.trim().toUpperCase(); // "HELLO MINH!!!"  drdrddrftftftff                                                                                                                                                                                              
// This line above trims the whitespaces first, and then capitalised all characters
