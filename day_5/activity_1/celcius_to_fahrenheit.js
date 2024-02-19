function celcius_to_fahrenheit(){
    const temperature_in_celcius = prompt("Enter the temperature(Celcius): ")
    fahrenheit = (temperature_in_celcius * 9/5) + 32
    console.log("Fahrenhiet: " + fahrenheit);
}

celcius_to_fahrenheit();