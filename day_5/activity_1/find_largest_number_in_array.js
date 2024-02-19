function largest_number(numberArray){
    let largest = 0;
    numberArray.forEach(function (number){
        if (number > largest){
            largest = number;
        }
    });
    console.log("The largest number is: " + largest);
}

numberArray = [10, 20, 30, 40, 50, 60]
largest_number(numberArray);