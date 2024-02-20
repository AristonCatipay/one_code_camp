// Spread and Rest Operators
// When there are many components using the app.

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

function myFunction(firstArgs, ...restofStrings) {
    console.log(fastArgs);
    console.log(restOfArgs);
}

myFunction("one", "two", "three", form)


// Default Paramaters
function multiply(a, b=4){
    return a * b 
}