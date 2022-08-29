// 28/7/2022
// Part 5: JavaScript Object Literals
// Lesson 5: Nesting Arrays & Objects

// 1. Nesting
// - Arrays can be nested in Objects, and vice versa
// - Arrays can be nested in arrays, and Objects can also be nested in 
// other Objects
// Examples:
const studentDavid = {
    name: 'david backhammer',
    grade: 6,
    strength: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}

// Or this one...
const shoppingCart = [
    {
        product: 'Kit Kat Bites',
        price: 0.99,
        quantity: 3
    },
    {
        product: 'Tesco Salad',
        price: 2.75,
        quantity: 1
    },
    {
        product: "Kinder's Surprise Egg",
        price: 1.5,
        quantity: 3
    }
]

// 2. Accessing in Nesting concept
// Suppose we have a list (array) of comments:
const comments = [
    {username: 'Tammy', text: 'lololololol', votes: 9},
    {username: 'FishBoi', text: 'glub glub', votes: 12387}
]

// Accessing the text from username FishBoi
console.log(comments[1].text); // 'glub glub' 