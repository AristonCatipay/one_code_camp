// Task: Create a class Animal with properties name and species. 
// Implement a method makeSound that logs the sound the animal makes.

// Parent Class
class Animal {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        return `The ${this.name} is a ${this.species} and is making sound.`;
    }
}

const myDog = new Animal('Booster', 'Dog');
console.log(myDog.makeSound());