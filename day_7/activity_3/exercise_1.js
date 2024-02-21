// Character
// Create a class called Character with the following attributes: name, health, stamina, and manna. 
// Give the character the following three methods: walk(), run(), and showStats().
// Give a new character health, stamina, and manna of 100 when it gets created. 
// When a walk method is invoked, have the stamina decrease by 1. 
// When a run method is involved, have the stamina decrease by 3. 
// When a showStats() method is invoked, display on the screen the name, health, stamina, and manna of the character. 
// Create an instance of the character called 'character' and have this character walk three times, run twice, and have it display its stats.

// Shaman
// Now, create another class called Shaman that inherits everything that the Character does and has, but:
// 1) have the default health be 150 
// 2) add a new method called heal(), which when invoked, increases the health, stamina, and manna by 5. 
// Have the Shaman walk three times, run twice, heal once, and have it display its stats.

// Swordsman
// Now, create another class called Swordsman that inherits everything that the Character has and does, with these two changes: 
// 1) have the default health be 170
// 2) add a new method called slash(), which when invoked, decreases the manna by 10. 
// Have the Swordsman walk three times, run twice, slash twice, and have it display its stats. 
// When the Swordsman's showStats function is called have it say 'I am powerful!' before it 
// displays the default information (make sure you still call the parent's showStats function).
// Now for the first instance of Character (instance called 'character '), try calling a method 'heal' or 'slash' and make sure it doesn't work.

class Character{
    constructor(name, health=100, stamina=100, manna=100){
        this.name = name;
        this.health = health;
        this.stamina = stamina;
        this.manna = manna;
    }

    walk(){
        console.log(`${this.name} is walking. 🚶‍♂️`);
        this.stamina--;
    }
    
    run(){
        console.log(`${this.name} is running. 🏃‍♂️`);
        this.stamina -= 3;
    }

    showStats(){
        return `Name: ${this.name}\nHealth: ${this.health} ❤️\nStamina: ${this.stamina} ⚡️\nManna: ${this.manna} 🔮`;
    }
}

class Shaman extends Character{
    constructor(name, health=150, stamina, manna){
        super(name, health, stamina, manna);
    }

    heal(){
        console.log(`${this.name} is healing. 🌟`);
        let additional_stats = 5;
        this.health += additional_stats;
        this.stamina += additional_stats;
        this.manna += additional_stats;
    }
}

class Swordsman extends Character{
    constructor(name, health=170, stamina, manna){
        super(name, health, stamina, manna);
    }

    slash(){
        console.log(`${this.name} is slashing. ⚔️`);
        this.manna -= 5;
    }

    showStats(){
        return `I am powerful! 💪\n` + super.showStats();
    }
}

const character = new Character('John Doe');
character.walk();
character.walk();
character.walk();
character.run();
character.run();
// character.slash();
// character.heal();
console.log(character.showStats());

const shaman = new Shaman('John Doe as Shaman 🔮🧙‍♂️');
shaman.walk();
shaman.walk();
shaman.walk();
shaman.run();
shaman.run();
shaman.heal();
console.log(shaman.showStats());

const swordsman = new Swordsman('John Doe as Swordsman ⚔️');
swordsman.walk();
swordsman.walk();
swordsman.walk();
swordsman.run();
swordsman.run();
swordsman.slash();
swordsman.slash();
console.log(swordsman.showStats());

