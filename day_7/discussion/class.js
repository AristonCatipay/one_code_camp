// Class
// Storage of all the chucks of code that you wish to reuse in the future.

// Example: Create a Car Class

class Car{
    constructor(model, yearCreated){
        this.model = model;
        this.yearCreated = yearCreated;
    }
}

// "this" keyword defines the current scope of the code block.

// Creating instances of a Car class
// Instantiation

const japaneseCar = new Car("Toyota AE86", 1983);
const germanCar = new Car("Volkswagen Beetle", 1938);


// Accessing the properties of an object
console.log('Accessing the properties of an object using the dot notation.');
console.log(japaneseCar.model);
console.log(japaneseCar.yearCreated);


// Constructor function for creating a person object
function Person(name, age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log(`Hello! ${name}. Age ${age}`);
    }
}

// Creating instances of person Object.
const firstPerson = new Person("Ariston Catipay", 22);
const secondPerson = new Person("Erick Catipay", 21);

// Accessing the properties of the Person object.
console.log("Accessing the properties of the person object using the dot notation.");
console.log(firstPerson.name);
console.log(firstPerson.age);
firstPerson.greet();

console.log(secondPerson.name);
console.log(secondPerson.age);
secondPerson.greet();