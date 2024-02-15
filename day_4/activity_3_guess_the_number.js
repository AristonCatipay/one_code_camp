function isGuessCorrect(guessedNumber, secretNumber){
    if (guessedNumber < secretNumber){
        console.log('Too low! Try again.');
        return false;
    } else if (guessedNumber > secretNumber){
        console.log('Too high! Try again.');
        return false;
    } else {
        console.log('Congratulations! You guessed the correct number: ' + secretNumber);
        return true;
    }
}

function gameLoader(){
    let secretNumber = 3;
    let attempts = 0;
    let correct = false;
    console.log('-----WELCOME TO THE GUESS THE NUMBER GAME -----');
    do {
        let guessedNumber = prompt('Enter a number between 1 and 10: ');
        if (isGuessCorrect(guessedNumber, secretNumber)){
            console.log('You took ' + attempts + ' attempt to guess the right number.');
            correct = true;
        } else {
            attempts++;
        }
    } while (correct == false);
}

gameLoader();

