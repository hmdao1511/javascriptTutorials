// 9/8/2022
// Part 11: JavaScript DOM
// Lesson 7: Changing Styles

// 1. How it works
// Let's say we want to change the color of the h1 title to green
const theTitle = document.querySelector('h1');
theTitle.style.color = 'green'; // This changes h1 title color to green
theTitle.style.fontSize = '3em'; // This changes the font size of h1 to 3em 

// 2. Using the Window Object to check the styles of an element in the Document

// We can use this in the Console:
// window.getComputedStyle(param);
// where param is the element that you want to check for its styles in the Document

// Example (use it in the Console):
window.getComputedStyle(h1); 
// This returns an Object with a bunch of styles of the h1 element in the Document

// We can even get access to a specfic style, like:
window.getComputedStyle(h1).color;
// Or
window.getComputedStyle(h1).fontSize;

// This might come in handy when you want to check for the current styles without looking
// at the CSS file
