// 9/8/2022
// Part 11: JavaScript DOM
// Lesson 6: Attributes

// 1. Changing an attribute
// - Call it out
// - Reassign it
// document.querySelector('#banner').id = 'other-tag'
// This will change the id name from 'banner' to 'other-tag'

// List of used attributes in the lesson:
// .id
// .src
// .href
// .title

// 2. getAttribute()
// - There is a small difference between calling out an attribute directly, and 
// using getAttribute, but they are basically the same  
document.querySelector('a').getAttribute('href');
// Returns the href attribute of the 'a' tag

// 3. setAttribute()
// - Changes the value of an attribute of a tag
// - This is the same as reassigning a value to an attribute
// - It has 2 parameters, the first one is for specifying an attribute, the 
// second one is the new value of that attribute that will replace the old value
const firstLink = document.querySelector('a');
firstLink.setAttribute('href', 'https://www.google.com');
// This change the first link into the link that leads to google.com