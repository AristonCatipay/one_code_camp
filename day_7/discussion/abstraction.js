// Abstraction: process of hiding the complex implementation details of an object and exposing only the relevant aspects or behavior to the user. 
// Abstraction is achieved through classes and objects, abstract base classes and interfaces.
// Example: When a user starts the engine of the car, they don't necessarily care about the inner mechanism of how the car start. 

class Vehicle{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        return `The ${this.brand} - ${this.model} is starting.`
    }

    stop(){
        return `The ${this.brand} - ${this.model} is stopping.`
    }
}

const myVehicle = new Vehicle("Toyota", "AE86");
console.log(myVehicle.start());
console.log(myVehicle.stop());