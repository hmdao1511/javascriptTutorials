// 5/8/2022
// Part 11: JavaScript DOM
// Lesson 1: Introducing the DOM

// 1. What is DOM
// - DOM stands for Document Object Model
// - It's a JavaScript representation of the webpage
// - It's your JS "window" into the contents of a webpage
// - It's just a bunch of Objects that you can interact with via JS

// 2. The Document Object
// Its concept: HTML/CSS Go IN -> JS Objects Come Out
// - The Document Object is our entry point into the world of DOM
// - It's where everything is contained
// - It contains representations of all the contents on a page, plus tons 
// of useful methods and properties

// - To see the Document Object and its attributes:
//      + Go to the Console
//      + Type console.dir(document) and press Enter

// - To see all HTML elements in an HTML file of a page:
//      + Go to the Console and type document.all and it will return an array 
// full of HTML elements currently living inside your documents
//      + You can inspect an element from that array by writing 
// document.all[indexNumber]
//      + To get access to the text of a HTML tag, just use the innerText attribute, so
// you write: document.all[indexNumber].innerText

