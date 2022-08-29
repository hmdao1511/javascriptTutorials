// 27/7/2022
// Part 3: JavaScript Decision Making
// Lesson 12: The Switch Statement.....is a lot

// It's another control-flow statement that can replace multiple 
// IF-ELSE statements 

// It's not widely used, but it's a good thing to know!

// 1. The syntax 
// Switch consists of 3 parts:
// - The key of the switch (it accepts a variable or a value as an argument)
// - The cases (all cases just like IF-ELSE statements)
// - The default case (if none of the cases above it are correct, the code will
// go into that default case at the end)

// After executing the code inside a case/a default case, there must be a "break"
// keyword to exit the switch 

// Example: 
// Instead of writing a bunch of IF_ELSEs, we use switch case to 
// simplify matter 
const day = 2;
switch (day) {
    case 1:
        console.log("SUNDAY");
        break;
    case 2:
        console.log("MONDAY");
        break;
    case 3:
        console.log("TUESDAY");
        break;
    case 4:
        console.log("WEDNESDAY");
        break;
    case 5:
        console.log("THURSDAY");
        break;
    case 6:
        console.log("FRIDAY");
        break;
    case 7:
        console.log("SATURDAY");
        break;
    default:
        console.log("INVALID DAY OF THE WEEK!");
        break;
}

// 2. Merging cases
// You can also merge cases that have the same outcome, like the 
// following example:
const dayOfWeek = "mOnDAy";
switch (dayOfWeek.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("WEEKDAY....URGGG");
        break;
    case "saturday":
    case "sunday":
        console.log("WEEKEND!!! YAYYY");
        break;
    default:
        console.log("INVALID DAY OF THE WEEK")
        break;
}