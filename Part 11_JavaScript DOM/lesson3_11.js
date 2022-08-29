// 5/8/2022
// Part 11: JavaScript DOM
// Lesson 3: Selecting Elements (part 2)

// 1. getElementsByTagName()
// - document.getElementsByTagName('tagName') will return an HTMLCollection (no need to
// freak out because you don't know what it is, it works like an array but it's not
// an array) of HTML elements that have the tagName in the parentheses

// Example (go to index.html in the test-files folder and open index.html):
// Write in the Console:
const imgTags = document.getElementsByTagName("img");
console.log(imgTags);
// It will return an HTMLCollection of the elements with the tag 'img'
// - About the HTMLCollection, it's an iterable collection, but it's not an array
// , thus we cannot use methods like map or filter like arrays
// - We can still use the .length for HTMLCollections

// We can play around with that HTMLCollection
for (let item of imgTags) {
    // changing all sources of the images in the document to the link below,
    // meaning that all images are now identical
  item.src =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
}

// 2. HTML elements are all Element Objects
// - HTML tags are actually Element Objects

// 3. getElementsByClassName()
// - This works similarly to getElementsByClassName(), but its argument is instead
// the name of a class as an identification. 
// - It will return an HTMLCollection containing the elements with the name of the
// class passed in the parentheses of the method

// Example:
//