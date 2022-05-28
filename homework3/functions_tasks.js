// Task 4
console.log("Task 4");

let a = Number(prompt("Enter please 'a' number"));
for(let i = 0; i < 3; i += 1 ){
    if( !Number.isInteger(a) ){
        alert('We support only integers. Please try again')
        a = prompt("Enter please 'a' number");
    }
    else break;
}

let b = Number(prompt("Enter please 'b' number"));
for(let i = 0; i < 3; i += 1 ){
    if( !Number.isInteger(b) ){
        alert('We support only integers. Please try again')
        b = prompt("Enter please 'a' number");
    }
    else break;
}

function raiseToDegree(a, b){
    if(Number.isInteger(a) && Number.isInteger(b)) return a ** b;
    else return "Not integer input was provided"
}

console.log(`Degreed result: ${raiseToDegree(a, b)} `);


// Task 5
console.log("Task 5");

function findMin(){
   return Math.min(...arguments);
}

console.log(`Find min of (12, 14, 4, -4, 0.2): ${findMin(12, 14, 4, -4, 0.2)}`);

// Task 6
console.log("Task 6");

function findUnique(arr){
    const set = new Set(arr);
    return set.size === arr.length;
}

var testData = [2, 2, 4];
console.log(`Check is Unique ${testData}: ${findUnique(testData)}`);

// Task 7
console.log("Task 7");

function lastElem(arr, count){
    if(count == undefined) count = 1;
    console.log(`Last numbers: ${arr.splice(-count)}`);
}

lastElem([2, 2, 4], 2);

// Task 8
console.log("Task 8");

function upperCase(line){
    const line2 =  line[0].toUpperCase() + line.slice(1);
    console.log(`Input string: ${line}`);
    console.log(`Output string: ${line2}`);
}

upperCase('i love java script');