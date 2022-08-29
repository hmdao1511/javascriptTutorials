// 28/7/2022
// Part 5: JavaScript Object Literals
// Lesson 4: Modifying Objects

// 1. Changing values of Object's keys
// We just have to call the key out and reassign it to another value
// Example:
const midterms = {
    dani: 96,
    david: 78,
    scott: 85
}

// Suppose you want to change david score to 80 (well you made a mistake
// while marking his grade ):<  )
midterms.david = 80; // All done!
midterms['david'] = 80; // This is also fine, too

// 2. Creating additional keys to the Object (attributes)
// Example:
const names = {
    david: 'Male',
    jane: 'Female'
}
// If we want to add "scott: 'Male'" into the Object names, you simply call the object 
// out, put a new key and assign it to the value that you want, like this:
names.scott = 'Male'; 
// Now it's: names = {david: 'Male', jane: 'Female', scott: 'Male'}

// Both Dot Notation and Squared Brackets work fine with this
names["isabella"] = 'Female';
// names = {david: 'Male', jane: 'Female', scott: 'Male', isabella: 'Female'}

