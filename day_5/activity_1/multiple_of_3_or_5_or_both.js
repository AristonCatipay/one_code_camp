function multiple_of_3_or_5_or_both(){
    const number = prompt('Enter the number: ')
    if (number % 3 == 0 && number % 5 == 0){
        console.log("Number is a multiple of 3 and 5");
    } else if (number % 3 == 0) {
        console.log("Number is a multiple of 3");
    } else if (number % 5 == 0){
        console.log("Number is a multiple of 5");
    } else {
        console.log("Number is not a multiple of 3 and 5.");
    }
}

multiple_of_3_or_5_or_both();