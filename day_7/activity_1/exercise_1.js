// Task: Create a class Person with properties name and age. Implement a method “introduce”
// that logs "Hi, I'm {name} and I'm {age} years old."

class Person{
    constructor(name, age){        
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi! ${this.name} and I'm ${this.age} years old.`);
    }
}

const firstPerson = new Person("John Doe", 22);
const secondPerson = new Person("Jessica Doe", 21);

firstPerson.introduce();
secondPerson.introduce();