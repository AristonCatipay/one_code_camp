// Polymorphism(many-forms): refers to the ability of different objects to be used in a similar way, 
// even if they have different underlying implementations.

// Parent Class
class Animal {
    makeSound(){
        return 'The animal makes a noise.';
    }
}

// Child Class
// To create a child class we use the 'extends' keyword.
class Dog extends Animal{
    makeSound() {
        // Super - calling the parent object of the child object.
        return super.makeSound() + " The dog is barking.";
    }
}

const myDog = new Dog();
console.log(myDog.makeSound());