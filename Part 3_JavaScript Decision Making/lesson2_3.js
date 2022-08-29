// 26/7/2022
// Part 3: JavaScript Decision Making
// Equality: Triple Vs. Double Equals 

// 1. == (double equals) 
// - It checks for equality of the value, but not equality of type
// - It casts both values to the same time and then compares them (this is
// the main reason why we don't use it)
// - This can lead to some unexpected results when we are working 
// with two values with two different types of data! 

// Examples of this weirdness:
5 == 5 // true
'b' == 'c' // false
7 == '7' // true (WTF)
0 == '' // true (again WTF)
true == false // false 
0 == true // true (WTF this is insane!)
null == undefined // true (well shit!)

// 2. === (triple equals)
// - AKA Strict Equality Operator
// - It does care about the data types while comparing
// - Use this rather than ==
// Examples:
5 === 5 // true
1 === 2 // false
2 === '2' // false
false === 0 // false

// The same thing applies for != (negation of ==) and !== (negation of ===):
10 != '10' // false
10 !== '10' // true 
