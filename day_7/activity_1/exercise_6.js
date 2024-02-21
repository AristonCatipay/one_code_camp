// Task: Extend the Animal class to create specific animal classes like Dog, Cat, and Bird.
// Implement their own makeSound methods.

// Parent Class
class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        return `The ${this.name} is making sound.`;
    }
}

// Child Class
class Dog extends Animal{
    makeSound() {
        return `${this.name} is a ${this.species} so he is barking. Arf! Arf!`;
    }
}

// Child Class
class Cat extends Animal{
    makeSound() {
        return `${this.name} is a ${this.species} so he is meowing. Meow Meow!`;
    }
}

// Child Class
class Bird extends Animal{
    makeSound() {
        return `${this.name} is a ${this.species} so he is chirping. Chirp! Chirp!`;
    }
}

const myDog = new Dog('Booster', 'Dog');
console.log(myDog.makeSound());
const myCat = new Cat('Mist', 'Cat');
console.log(myCat.makeSound());
const myBird = new Bird('Fip', 'Bird');
console.log(myBird.makeSound());
