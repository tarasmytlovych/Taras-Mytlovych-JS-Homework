// Task 5

console.log("Task 5");

const isAdult = Number(prompt("Please tell us your age"));

if(isAdult >= 18) console.log("Ви досягли повнолітнього віку");
else console.log("Ви ще надто молоді");

// Task 6

console.log("Task 6");

const a = Number(prompt("Please enter 'a' side"));
const b = Number(prompt("Please enter 'b' side"));
const c = Number(prompt("Please enter 'c' side"));

const validTriangle = (a + b) > c && (c + b) > a && (c + a) > b;

if( !validTriangle ) console.log(`Incorrect data. \n Cannot build triangle from passed values`);
else{
    const halfPerimeter = (a + b + c) / 2;

    const square = Math.sqrt( halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));

    console.log(`Triangle square: ${square.toFixed(3)}`);


    const isRectangle = (a**2 + b**2 == c**2) || (c**2 + b**2 == a**2) || (c**2 + a**2 == b**2)
    console.log(`Is Triangle a rectangle: ${isRectangle}`);
}

// Task 7

console.log("Task 7");

const currentTime = new Date();
const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

const night = 23 * 60;
const morning = 5 * 60;
const day = 11 * 60;
const evening = 17 * 60;


if(currentMinutes >= night && currentMinutes < morning) console.log("Good night");
else if(currentMinutes >= morning && currentMinutes < day) console.log("Good morning");
else if(currentMinutes >= day && currentMinutes < evening) console.log("Good day");
else console.log("Good evening");

switch(currentMinutes){
    case currentMinutes >= night && currentMinutes < morning:
        console.log("Switch: Good night");
        break;
    case currentMinutes >= morning && currentMinutes < day:
        console.log("Switch: Good morning");
        break;
    case currentMinutes >= day && currentMinutes < evening:
        console.log("Switch: Good day");
        break;
    default:
        console.log("Switch: Good evening");
}


