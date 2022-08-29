// 5/8/2022
// Part 9: Callbacks and Array Methods
// Lesson 9: Arrow Function & 'this'

// 1. Be careful when using arrow function for creating a method for an Object
// and use 'this' keyword
// Example:
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    } // Viggo Mortensen    This works perfectly fine

    // But when we use arrow function and 'this' at the same time
    // this will refer to the Window Object rather than the current Object (person)
    // => this.firstName is undefined

    // fullName: () => {
    //     console.log(this);  // Window Object
    //     return `${this.firstName} ${this.lastName}`;   // undefined
    // }
}