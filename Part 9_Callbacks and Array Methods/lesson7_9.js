// 4/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 7: some And every Method

// 1. some Method
// - It's a boolean method, it returns a boolean value 
// - It returns true if ANY of the array elements pass the test function
// Example:
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag',];

// Are there any words longer than 4 characters?
console.log(words.some(word => {
    return word.length > 4;
}));  // true

// Does any word start with a 'Z'?
console.log(words.some(word => {
    return word[0].toUpperCase() === 'Z';
}));  // false

// Does any word contain 'cake'?
console.log(words.some(word => {
    return word.toLowerCase().includes('cake');
}))  // true

// 2. every Method
// - It's a boolean method, it returns a boolean value 
// - It returns true if ALL of the array elements pass the test function
const listWords = ['dog', 'dig', 'log', 'bad', 'wag'];


document.getElementsByTagName('h1')[0].innerHTML = listWords[3];
document.getElementsByTagName('h1')[1].innerHTML = listWords[1];

// Are ALL of the words 3 characters only?
console.log(listWords.every(word => word.length === 3)); // true

// Do ALL of the words start with the character 'd'?
console.log(listWords.every(word => word[0].toLowerCase() === 'd'));


