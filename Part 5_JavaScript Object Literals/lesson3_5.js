// 28/7/2022
// Part 5: JavaScript Object Literals
// Lesson 2: Accessing Data Out Of Objects 

// 1. Accessing Object Property's values

// * First way:
// - We use [], and inside that squared brackets, we use "" or '' and write out
// the attribute you are searching for between those quotation marks
// Example:
const person = {
    firstName: 'Hai Minh', 
    lastName: 'Dao', 
    age: 19,
    languages: ['Vietnamese', 'English', 'Japanese', 'Esperanto'],
    statusOfMarriage: null,
    havingAGirlFriend: false,
    favoriteHobby: 'Learn Japanese',
    crushName: 'Gnem'
}; 

// Accessing firstName and lastName
console.log(person['firstName']); // 'Hai Minh'
console.log(person['lastName']); // 'Dao'

// It returns undefined if the attribute is not found
console.log(person['nickname']); // undefined

// * Second way:
// - We use the name of the Object, followed by a dot "." and the attribute
// Example:
console.log(person.crushName); // 'Gnem'

// Notice how this has the same concept as using .length :)

// 2. Notes about property's key (attribute)
// Valid keys: All keys are converted to Strings (even if it's a number), except
// for Symbols (which we haven't covered yet)
// Example:
const years = {
    1999: 'good',
    2020: 'bad',
    why2020IsBad: 'Because of Covid'
}
console.log(years["1999"]); // 'good'
// You can even use:
console.log(years[2020]); // 'bad'
// The 2020 is converted into a String 

// BUT, we cannot use year.1999
// console.log(years.1999);    Yeah this doesn't work

// You cannot use years[why2020IsBad] either
// console.log(years[why2020IsBad]);    Yeah this also doesn't work
// It must be:
console.log(years["why2020IsBad"]); // 'Because of Covid'
// or:
console.log(years.why2020IsBad); // 'Because of Covid'

// 3. String concatenation for searching Object key
// This only works if you are using [] for looking up the Object key
// Example:
console.log(years['why2020' + 'IsBad']); // 'Because of Covid'

// 4. Make use of variables for looking up Object Keys
// Example:
const theWorstYear = 2020;
const listOfCovidYears = {
    2020: "Worst",
    2021: "Medium",
    2022: "Meh idk"
}
// Now if we use it like this:
console.log(listOfCovidYears[theWorstYear]); // "Worst"
// It totally worked! You can make good use of this to make your
// program works dynamically

// But this cannot be used if you are using dot notation ".". Only squared brackets
// can be used  