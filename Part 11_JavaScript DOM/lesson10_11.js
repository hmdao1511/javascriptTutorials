// 23/8/2022
// Part 11: JavaScript DOM
// Lesson 10: appendChild()

// This method adds an element into (inside) another element (maybe divs or lists)
// Example (suppose we have a #mylist that is list containing 'Coffee' and 
// 'Tea' as its children items):
const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);

// After this, the 'li' element with the text 'Water' will be added as a child to the 
// #myList list