class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return super.showFullName() + ` ${middleName}`;
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = (currentYear - this.year) + 1;
        if (course > 6) return "Congratulations! You have graduated"
        return `${course}`;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse()); 
