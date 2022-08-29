// 26/7/2022
// Part 3: JavaScript Decision Making
// Lesson 8: Nesting Conditionals

// This is just the concept of putting a conditional statement
// INSIDE another conditional statement

// Example: Create a piece of code that asks the user for their password
// and it must satisfy:
// - Password must be 6+ characters 
// - Password cannot include space
const passwordInput = prompt("Please enter a new password");
if (passwordInput.length >= 6){
    console.log("LONG ENOUGH PASSWORD!");
    // .indexOf() returns -1 if the argument is not in the String
    // We need to catch the password that doesn't have a space in it, so we put
    // a space as an argument for that function
    if (passwordInput.indexOf(' ') === -1){
        console.log("GOOD JOB! NO SPACES");
    } else {
        console.log("PASSWORD CANNOT CONTAIN SPACES!");
    }
} else{
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS");
}