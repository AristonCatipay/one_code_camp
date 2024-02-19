var nameArray = ["John", "Mary", "Mark"];

// Accessing the last item.
console.log("Note: Accessing the last item.")
console.log(nameArray[nameArray.length-1]);

// Changing the value
console.log("Note: Changing the value.")
console.log(nameArray);
nameArray[0] = 'Robert';
console.log(nameArray);

// Looping over an array
// Printing the index
console.log("Note: Printing the index.");
for (let i = 0; i < nameArray.length; i++){
    console.log([i]);
}

// Printing the item in the specific index
console.log("Note: Printing the item in the specific index.");
for (let i = 0; i < nameArray.length; i++){
    console.log(nameArray[i]);
}

// For Each
console.log("Note: Using the for each loop.");
nameArray.forEach(function(name){
    console.log(name);
});

// Objects
console.log("Note: Objects")
const person = {
    firstName: "Ariston",
    lastName: "Catipay",
    age: "22",
    hobbies: ['Watching movies', 'Gaming', 'Coding']
}

// Accessing the value
console.log('Note: Accessing the properties of an object.');
console.log(person.age);

// Changing the value
console.log('Note: Updating the properties of an object.');
person.age = 23;
console.log(person.age);

// Adding a property
console.log('Note: Adding a property to the object');
person.nationality = "Filipino";
console.log(person.nationality);

// Function Declaration
function add(a, b){
    return a + b;
}

// Function Expression
// Allow you to store the value of execution.
// Allows you to use callbacks.
let sum = function(a, b){
    a + b;
}

// Callbacks
// Allow you to call a function after the execution of another function.

// This is called the main function
function mathOperation(num1, num2, operation){
    return operation(num1, num2);
}

// Both addition and subtraction are called callback functions.
function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

let result1 = mathOperation(5, 3, addition);
let result2 = mathOperation(5, 3, subtraction);

console.log("Result of addition: ", result1);
console.log("Result of subtraction: ", result2);

