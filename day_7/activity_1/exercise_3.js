// Task: Create a base class Shape with a method calculateArea(). 
// Create derived classes Circle and Rectangle that calculate their respective areas.

class Shape {
    constructor() {
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log("Circle area:", circle.calculateArea()); 
console.log("Rectangle area:", rectangle.calculateArea());
