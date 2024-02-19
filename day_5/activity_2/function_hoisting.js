function greet(name, greeting){
    return greeting() + name;
}

function goodmorning_greeting(){
    return "Good morning "
}

function goodafternoon_greeting(){
    return "Good afternoon "
}

function goodevening_greeting(){
    return "Good evening "
}

let name = "Ariston Catipay";

console.log("Morning: " + greet(name, goodmorning_greeting));
console.log("Afternoon: " + greet(name, goodafternoon_greeting));
console.log("Evening: " + greet(name, goodevening_greeting));
