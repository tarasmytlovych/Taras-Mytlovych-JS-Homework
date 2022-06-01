function checkAge(age) {
    try {
        if(String(age).length == 0) throw EvalError("Empty string was passed");
        if(isNaN(age)) throw EvalError("Oops, not a number was passed");
        if(Number(age) < 14) throw EvalError("Sorry, man, you're too young");
        console.log("Film is granted");
    } catch (err) {
        alert(`${err.name} \n ${err.message}`);
    }
}

const age = prompt("Please your age");

checkAge(age);
