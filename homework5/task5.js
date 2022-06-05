class GeometricFigure {

    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}


class Triangle extends GeometricFigure {

    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        const halfPerimeter = (this.a + this.b + this.c) / 2;
        const square = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));

        return square.toFixed(0);
    }
}


class Square extends GeometricFigure {

    constructor(a) {
        super();
        this.a = a;
    }

    getArea() {
        return this.a * this.a;
    }
}


class Circle extends GeometricFigure {

    #p = 3.14

    constructor(r) {
        super();
        this.r = r;
    }

    getArea() {
        return this.#p * (this.r ** 2);
    }
}


var triangle = new Triangle(3, 4, 5);
var square = new Square(5);
var circle = new Square(4);
var user = { name: "Taras", course: "JS" };

var testArray = [triangle, square, circle, user];


function handleFigures(figures) {
    let sumSquareFunction = function (totalSquare, figure) {
        if (!(figure instanceof GeometricFigure)) return totalSquare;
        let currentValue = figure.getArea();
        console.log(`Geometric figure: ${figure.toString()}  - area:  ${currentValue}`);

        return Number(totalSquare) + currentValue
    };

    let totalArea = figures.reduce(sumSquareFunction, 0);

    // let totalArea = figures.reduce(function (totalSquare, figure) {
    //     if (!(figure instanceof GeometricFigure)) return totalSquare;
    //     let currentValue = figure.getArea();
    //     console.log(`Geometric figure: ${figure.toString()}  - area:  ${currentValue}`);

    //     return Number(totalSquare) + currentValue
    // }, 0);

    console.log(`Total area: ${totalArea}`);
}

handleFigures(testArray);