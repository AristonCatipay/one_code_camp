// Implement a class Student that inherits from Person and adds a property studentID.
// Configure the “greet” method to include the student's ID.

class Person{
    constructor(name, age){        
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Hi! ${this.name} and I'm ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name, age, student_id){        
        super(name, age);
        this.student_id = student_id; 
    }

    greeting(){
        return super.greeting() + ` My student ID is ${this.student_id}.`
    }
}

const firstPerson = new Person("John Doe", 30);
const secondPerson = new Student("Jessica Doe", 21, '232354323');

console.log(firstPerson.greeting());
console.log(secondPerson.greeting());