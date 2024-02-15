function sayHello(){
    let user = "Ariston Catipay";

    console.log('Hello ' + user);
}
sayHello();


let temperature = 25;

switch(true){
    case (temperature < 0):
        console.log("It's freezing");
        break;
    case (temperature >= 0 || temperature < 20):
        console.log("It's cool outside.")
        break;
    default:
        console.log("It's warm outside.");
} 