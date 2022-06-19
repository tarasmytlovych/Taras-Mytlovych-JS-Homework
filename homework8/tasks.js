/// ======== Task 1 ========== ///
function checkUppercase(text) {
    let regex = /^[A-Z]/;
    let result = regex.test(text);

    if (result) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character ");
    }
}

checkUppercase('regexp');
checkUppercase('RegExp');

/// ======== Task 2 ========== ///
function checkEmail(email) {
    let regex = /\S+@\S+\.\S+/;

    let result = regex.test(email);

    if (result) {
        console.log(`${email} is VALID`);
    } else {
        console.log(`${email} is invalid`);
    }
    return result;
}

checkEmail("aqa@example.com");
checkEmail("aqa@example");
checkEmail("aqaexample.com");
checkEmail("@aqa!ss@example.com");

/// ======== Task 3 ========== /// TBD - task is not clear
function checkRegex(text) {
    let regex = /d+bd/i;

    console.log(`${regex.split(text)} `);
}

// checkRegex('cdbBdbsbz');


/// ======== Task 4 ========== /// 
function checkRegex4(text) {
    let regex = /\s/;

    let splitArray = text.split(regex);

    console.log(`${splitArray[1]}, ${splitArray[0]}`);
}

checkRegex4('Java Script');

/// ======== Task 5 ========== 
function checkRegex5(card) {
    let regex = /\d{4}-\d{4}-\d{4}-\d{4}/;

    console.log(`${card} Card validation: ${regex.test(card)}`);
}

checkRegex5('1111-1111-1111-1111');
checkRegex5('1111-1111-11111111');
checkRegex5('1111-1111-1111-333');
checkRegex5('1111-1111-1111-aqae');


/// ======== Task 6 ========== 
function checkRegex6(email) {
    let regex = /^(?!_)^(?!-)\w*-{0,1}\w*_{0,1}\w+@\w+\.\w+/;

    console.log(`${email} text validation: ${regex.test(email)}`);
}

checkRegex6("my_mail@gmail.com");
checkRegex6("#my_mail@gmail.com");
checkRegex6("my_ma--il@gmail.com");

/// ======== Task 7 ========== 
function checkLogin(password) {
    let regex = /^[A-Za-z][\w\.{}\w]{2,9}$/;
    
    let numbersRegexp = /\d\.{0,1}\d*/g;
    let numbers = password.match(numbersRegexp);

    console.log(`${regex.test(password)}`);
    console.log(`${numbers}`);

}

checkLogin("ee1.1ret3");
checkLogin('ee1*1ret3');