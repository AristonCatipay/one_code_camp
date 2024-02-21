// Task: Create a class Person with properties name and age. 
// Implement a method greet that logs a greeting message.

class Person{
    constructor(name, age){        
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Hi! ${this.name} and I'm ${this.age} years old.`);
    }
}

const firstPerson = new Person("John Doe", 22);
const secondPerson = new Person("Jessica Doe", 21);

firstPerson.greeting();
secondPerson.greeting();