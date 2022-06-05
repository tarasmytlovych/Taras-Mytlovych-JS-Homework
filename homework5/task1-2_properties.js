// Task 1
function propsCount(object){
    return Object.keys(object).length;
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    team: "6"
};

console.log(`${propsCount(mentor)}`);


// Task 2 
function showProps(obj){
    console.log( `Properties: ${Object.keys(obj)}`);
    console.log( `Values: ${Object.values(obj)}`);

}

let mentor2 = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development",
    team: "6",
    ongoing: true
};

 showProps(mentor2);
