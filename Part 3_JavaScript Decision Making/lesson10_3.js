// 27/7/2022
// Part 3: JavaScript Decision Making
// Lesson 10: Logical Operators

// 1. Logical Operators
// - They are for combining expressions, to form an even larger
// logical expression
// - There are 3 of them in JavaScript, and those are:
//      + && (AND)
//      + || (OR)
//      + ! (NOT)

// 2. && (AND) 
// - Both sides must be true, for the entire thing to be true
// Examples:
1 <= 4 && 'a' === 'a'; // true
9 > 10 && 9 >= 9; // false
'abc'.length === 3 && 1 + 1 === 4; // false

// Example of applying this concept to conditional statements
const password = prompt("Enter your password");

if(password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("VALID PASSWORD");
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!");
}

// 3. || (OR)
// - If one side is true, the entire thing is true
// Examples:
1 !== 1 ||  10 === 10; // true
10/2 === 5 || null; // true
0 || undefined; // false

// Example of applying this concept to conditional statements:
// (Remember to use parentheses to make expressions clearer!)
const age = 19;
if ( (age >= 0 && age < 5) || age >= 65){
    console.log("FREE");
} else if (age >= 5 && age < 10){
    console.log("10$");
} else if (age >= 10 && age < 65){
    console.log("$20");
} else {
    console.log("INVALID AGE");
}

// 4. ! (NOT)
// - !expressions returns true if expression is false
// - It's used to negate a value 
// Examples:
!null // true
!(0 === 0) // true
!(3 <= 4) // false

// Example of applying this concept to conditional statemetn:
const currentAge = 30;
if (!((age >= 0 && age < 5) || age >= 65)){
    console.log("You are not a baby or senior!");
}




