// 26/7/2022
// Part 3: JavaScript Decision Making
// Lesson 6: Else

// Life without Else in a condtional statement:
// const dayOfWeek = "Saturday";

// if (dayOfWeek === "Monday") {
//     console.log("UGHHH I HATE MONDAYS!");
// } else if(dayOfWeek === "Saturday"){
//     console.log("YAY I LOVE SATURDAYS!");
// } else if(dayOfWeek === "Friday"){
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// } else if(dayOfWeek === "Sunday"){
//     console.log("OH HOH I HAVE TO GO TO WORK TOMORROW!");
// } else if(dayOfWeek === "Tuesday"){
//     console.log("MEH");
// } else if(dayOfWeek === "Wednesday"){
//     console.log("MEH");
// } else if(dayOfWeek === "Thursday"){
//     console.log("MEH");
// } 

// As you can see, the outcome of Tuesday, Wednesday and Thursday are all "MEH", which 
// you have to rewrite them 3 times and that's unnecessary. They all have the same 
// outcome, after all. 

// Life with Else:
const dayOfWeek = prompt("Enter a day").toLowerCase();

if (dayOfWeek === "monday") {
    console.log("UGHHH I HATE MONDAYS!");
} else if(dayOfWeek === "saturday"){
    console.log("YAY I LOVE SATURDAYS!");
} else if(dayOfWeek === "friday"){
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
} else if(dayOfWeek === "sunday"){
    console.log("OH HOH I HAVE TO GO TO WORK TOMORROW!");
} 
// The code inside this ELSE statement will be executed if 
// it's not all of the above statements are false. Applied to the rest
// of the cases
else {
    console.log("MEH")
}

// TO SUM UP, A FULL CONDITIONAL STATEMENT SHOULD LOOK LIKE THIS:
// if(...){
//     ...
// } else if (...){
//     ...
// } else if (...){
//     ...
// }  ......and so on...
// else{
//     ...
// }