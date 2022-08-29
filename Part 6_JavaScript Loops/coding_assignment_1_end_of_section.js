// 1/8/2022
// Part 6: JavaScript Loops
// JavaScript Coding Assignment 1

// Starting statement
let command = '';
const toDo = [];
// While Loop for repeating the whole process
while (command !== 'quit') {
  command = prompt('What would you like to do?').toLowerCase();
  if (command === 'new') {
    let input = prompt('Enter new todo');
    console.log(`${input} added to List`);
    toDo.push(input);
  } else if (command === 'list') {
    let count = 0;
    console.log("**********");
    for (let item of toDo) {
      console.log(`${count}: ${item}`);
      count++;
    }
    console.log("**********");
  } else if (command === 'delete') {
    let deleteIndex = prompt('Enter index of todo to delete');
    while(!parseInt(deleteIndex)){
      deleteIndex = prompt('Not a valid number! Enter index of todo to delete');
    }
    console.log(`ToDo removed at index ${deleteIndex}`);
    toDo.splice(deleteIndex,1);
  }
}

// Quitting alert
console.log("OK, YOU QUIT THE APP");
