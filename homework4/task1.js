function calcRectangleArea(width, height){
    // debugger;
    validateValue(width)
    validateValue(height)
    return width * height;
}

function validateValue(value){
    if(isNaN(value)) throw Error(`Passed \"${value}\" value is not a number`)
    else if(Number(value) <= 0) throw Error(`Passed \"${value}\" value is not a valid rectangle side`)
}

const a = prompt("Please enter 'a' side");
const b = prompt("Please enter 'b' side");

console.log(`Rectangle square : ${calcRectangleArea(a, b)}`)