function getUserData(displayUserDataFunction){
    const userData = {
        firstName: "John",
        lastName: "Doe",
        age: 32, 
        nationality: "American",
    }
    return displayUserDataFunction(userData);
}

function displayUserDataFunction(userObject){
    console.log("First name: " + userObject.firstName);
    console.log("Last name: " + userObject.lastName);
    console.log("Age: " + userObject.age);
    console.log("Nationality: " + userObject.nationality);
}

getUserData(displayUserDataFunction);