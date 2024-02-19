function applyFunction(anotherFunction, nameArray){
    for (let i = 0; i < nameArray.length; i++){
        console.log(anotherFunction(nameArray[i]));
    };    
}

function greet(name){
    return "Hello " + name;
}

let name = ['John', 'Mary', 'Maria', 'Marko', 'Dillan']
applyFunction(greet, name);