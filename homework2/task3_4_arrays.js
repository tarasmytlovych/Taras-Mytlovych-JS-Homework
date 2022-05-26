// Task 3

console.log("Task 3");

const array = [];

array[0] = 123;
array[1] = 'some very long string';
array[2] = true;
array[3] = null;

console.log(`Array length ${array.length} `);

var newElem = prompt("Enter your element");
array.push(newElem);

console.log(`Fifth element ${array[4]} `);

array.shift();
console.log(`Array: ${array} `);

// Task 4
console.log("Task 4");

let cities = ["Rome", "Lviv", "Warsaw"]; 

console.log(`Array joining: ${cities.join("*")} `);