// Use arrow functions to calculate the square of a given number and log the result to the console.
square = (number) => {
    return number * number;
}

console.log(square(3));

// Use template literals to create a welcome message that includes the name and age of a person.
let name = 'Ariston Catipay';
let age = 22;

console.log(`Welcome to OneCodeCamp Name: ${name}, Age: ${age}`);
// Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
    firstName: 'Ariston',
    lastName: 'Catipay',
}

let {firstName, lastName} = person;
console.log(`${firstName} ${lastName}`);
// Use the spread operator to merge two arrays into a single array.

let numArray1 = [1, 2, 3, 4, 5];
let numArray2 = [6, 7, 8, 9, 10];

function mergeArray(array1, array2){
    const new_array = [...array1, ...array2];
    return new_array;
}

console.log(mergeArray(numArray1, numArray2));
// Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided,
// assume a default length and width of 1.

function area_of_rectangle(length=1, width=1){
    let area = length * width
    return area;
}

console.log(area_of_rectangle(2, 2));
console.log(area_of_rectangle());

// Create a class called 'Person' with properties for name and age, and a method to introduce the person.
// Instantiate an object of the class and call the introduce method.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi!, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person('Ariston', 22);

person1.introduce();
