// Task: Implement a class Shape with properties color and name. 
// Create classes Circle and Square that inherit from Shape and add their own properties.

class Shape {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

class Circle extends Shape {
    constructor(color, name, radius) {
        super(color, name);
        this.radius = radius;
    }
}

class Square extends Shape {
    constructor(color, name, sideLength) {
        super(color, name);
        this.sideLength = sideLength;
    }
}

const circle = new Circle("red", "Circle", 5);
const square = new Square("blue", "Square", 4);

console.log(circle);
console.log(square);
