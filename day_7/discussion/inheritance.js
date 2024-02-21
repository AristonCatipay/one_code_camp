// Inheritance
// Inheritance allows a class (child/sub/extended class) to inherit properties and methods from another class (parent/super/base class). 
// The child class can extend the functionality of the parent class and also override or add new behavior. This promotes code reusability.

// Parent Class
class Animal {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`The ${this.name} is eating.`);
    }
}

// Child Class
// To create a child class we use the 'extends' keyword.
class Dog extends Animal{
    bark() {
        console.log(`The ${this.name} is barking. Aw aw!`);
    }
}

const myDog = new Dog('Booster');
myDog.makeSound();
myDog.bark();