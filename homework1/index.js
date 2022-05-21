// Task 2
console.log("Task 2\n My name is T. Mytlovych");

// Task 3
const sourceVar = "Lake Ontario";
let destinationVar = true;

console.log(`Task 3.1 Before replacement \n Var 1st: ${sourceVar} \n Var 2nd: ${destinationVar}`);

destinationVar = sourceVar;
console.log(`Task 3.2 After replacement \n Var 1st: ${sourceVar} \n Var 2nd: ${destinationVar}`);

// Task 4
const myShinyObject = {
    "stockName" : "VOO",
    "etf": true,
    "price": 358.02,
    "exchange": null,
    "marketSize": undefined
};
console.log(`Task 4\n My shiny object ${JSON.stringify(myShinyObject)}`);

// Task 5
const ageConfirmation = confirm("Are you sure you're over 18?");
console.log(`Task 5\n Age confirmation: ${ageConfirmation}`);

// Task 6
const firstName = "Taras";
const lastName = "Mytlovych";
const group = "JS Fun";
const yearOfBirth = 1991;
const maritalStatus = true;

let stringVars = [];
let numberVars = [];
let booleanVars = [];
const allVars = [firstName, lastName, group, yearOfBirth, maritalStatus];

for(let i = 0; i <= allVars.length; i++){
    const variable = allVars[i];
    const varType = typeof(variable);

    switch(varType) {
        case 'string':
            stringVars.push(variable);
            break;
        case 'number':
            numberVars.push(variable);
            break;   
        case 'boolean':
            booleanVars.push(variable);
            break;   
    }
}

console.log(`Task 6.1 Sorted variables by type \n ${numberVars} ; ${booleanVars} ; ${stringVars}`);

let nullableVariable = null;
let undefinedVariable;
console.log(`Task 6.2 Falsy values \n nullableVariable: ${nullableVariable}, undefinedVariable: ${undefinedVariable} `);

// Task 7

const userLogin = prompt("Could you tell us your login?", "aparco");
const userEmail = prompt("Could you tell us your email?", "aparco@homeindustries.com");
const userPass = prompt("Could you tell us your pass?", "NOT qwerty !");

alert(`Task 7 \n Dear ${userLogin}, your email is ${userEmail}, your password is ${userPass}`)

// Task 8
const userInput = prompt("Could you tell how many seconds is in a minute?", "no tips)");
console.log(`Task 8\n Your answer is ${userInput}` )
