// Task 2
console.log("Task 2");

const userNumber = Number(prompt("Please enter your number"));

if(isNaN(userNumber)) console.log("Was entered not a number");
else{
    const result = (userNumber > 0 && userNumber % 2 == 0)  && userNumber % 7 == 0;
    console.log(`result ${result}`);
} 
