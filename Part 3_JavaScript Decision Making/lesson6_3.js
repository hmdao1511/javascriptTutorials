// 26/7/2022
// Part 3: JavaScript Decision Making
// Lesson 6: Else-if

// Why do we use else if?
// - "If not the first thing, maybe this other thing??"
// - "else if" only runs if the previous conditional statement is false
// - You can have multiple else ifs
// Example:
const dayOfWeek = "Saturday";

if (dayOfWeek === "Monday") {
    console.log("UGHHH I HATE MONDAYS!");
} else if(dayOfWeek === "Saturday"){
    console.log("YAY I LOVE SATURDAYS!");
} else if(dayOfWeek === "Friday"){
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
}