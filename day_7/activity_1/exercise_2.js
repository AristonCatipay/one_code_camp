// Task: Create a class Rectangle with properties width and height. Implement methods to
// calculate the area and perimeter of the rectangle.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 3);
console.log("Area: ", rectangle.calculateArea());
console.log("Perimeter: ", rectangle.calculatePerimeter());
