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

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

let result1 = mathOperation(5, 3, addition);
let result2 = mathOperation(5, 3, subtraction);
let result3 = mathOperation(5, 3, multiplication);
let result4 = mathOperation(5, 3, division);

console.log("Result of addition: ", result1);
console.log("Result of subtraction: ", result2);
console.log("Result of multiplication: ", result3);
console.log("Result of division: ", result4);