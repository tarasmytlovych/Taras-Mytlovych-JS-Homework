// Task 1
console.log("Task 1");

const array = [2, 3, 4, 5];
var multiplied = 1;
var multiplied2 = 1;

for(let i = 0; i < array.length; i += 1){
    multiplied *= array[i];
}
console.log(`Multiplied for: ${multiplied}`);

let i = 0;
while(i < array.length ){
    multiplied2 *= array[i];
    i += 1;
}
console.log(`Multiplied while: ${multiplied2}`);

// Task 2
console.log("Task 2");

for(let i = 0; i <= 15; i += 1){
    if(i % 2 == 0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
}

// Task 3
console.log("Task 3");

function randArray(k){
    let array = [];
    for(let i = 0; i < k; i += 1){
        array.push(Math.floor(Math.random() * (500 - 1) + 1));
    }
    return array;
}

console.log(`Random array with 7 values: ${randArray(7)}`);