function even_or_odd(){
    const number = prompt("Enter a number: ")
    if (number % 2 == 0){
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

even_or_odd();