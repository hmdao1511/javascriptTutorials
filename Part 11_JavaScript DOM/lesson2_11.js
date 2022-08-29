// 5/8/2022
// Part 11: JavaScript DOM
// Lesson 2: Selecting Elements

// 1. Selecting an element 
// We have multiple ways (some methods of the Document Object) to select elements 
// from the HTML file to do some JS stuff:
// - getElementById
// - getElementsByTagName
// - getElementsByClassName

// 2. getElementById()
// document.getElementById('tagName') will return the tag that has the tagName 
// specified in the parentheses
// Example (go into the test-files folder and open index.html):
// - Go to the console and type to try:
const banner = document.getElementById('banner');
console.log(banner);
// It will return the tag containing this id 
// And if we do:
console.dir(banner);
// It returns the Object of that tag, full of its properties