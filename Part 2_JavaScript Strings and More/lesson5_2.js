// 25/7/2022
// Part 2: JavaScript Strings and More
// Lesson 5: String Template Literals - SUPER USEFUL

// 1. Template Literals
// - Template Literals are Strings that allow embedded expressions, which 
// will be evaluated and then turned into a resulting String. 
// - We use back-ticks (`) to enclose the String, not single/double quotes
// for Template Literals
// - Anything inside this ${} will count as an expression and will be evaluated
// - Because $ is a special keyword dedicated for Template Literals, if you 
// want to write a literal $ symbol then write $$ (double dollar sign) instead

// Example:
// Case 1: Life without Template Literals
let quantity = 10;
let product = "Book";
let price = 20;
let currency = "dollars";

// Too many + and "", hard to follow and debug
let checkout = "You bought " + quantity + " " + product +" .Total is: " + price * quantity + " " + currency;
// You bought 10 Book. Total is: 200 dollars

// Case 2: Life with Template Literals
let checkout2 = `You bought ${quantity} ${product}. Total is: ${price * quantity} ${currency}`;
// You bought 10 Book. Total is: 200 dollars

// Same outcome, but overall easier to edit and look at. No need to add tons of + and "" into your String anymore!



