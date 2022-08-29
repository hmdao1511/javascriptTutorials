// 23/8/2022
// Part 11: JavaScript DOM
// Lesson 8: ClassList

// 1. What is it?
// A ClassList is a list containing the current classes that currently exist 
// in a specific element

// Example:
// If a div has the classes 'purple', 'right' and 'italic' then:
div.classList //  Returns 'purple right italic' for the classes in that div

// You can even add/remove a class in the ClassList by using the add()/remove() method
// - Adding will always add the class at the end of the classList list
div.classList.add('emphasis'); // adds the class 'emphasis' into that div

div.classList.remove('purple'); // removes the class 'purple' from the div

// 2. toggle()
// This method of the classList either adds or removes the class in the parentheses 
// in an element, and:
// - Returns true if the toggled class is added to the element
// - Returns false if the toggled class is removed from the element
// - The toggled class is added to the element if that class was not initially in 
// that element (returns true in the Console)
// - If we call toggle() for a class that is currently in the element, the toggled class
// will be removed from the element (returns false in the Console)

// Example (Suppose we have an h1 with no classes)
h1.classList.toggle('red'); // adds the class 'red' to the h1 element and returns true

// If we call that statement once again...
h1.classList.toggle('red'); 
// removes the class 'red' from the h1 element and returns false

