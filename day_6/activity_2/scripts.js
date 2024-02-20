// Generate a random number between 1 and 10.
let random_number = Math.floor(Math.random() * 10) + 1;
// Guess what the random generated number is
let guess = parseInt(prompt("Enter your guess(1-10): "));
// Check if the user's input is a valid number.
if (isNaN(guess) || guess <= 0 || guess >= 11){
    console.log('Invalid number.');
} else {
    if (random_number === guess){
        console.log('Congratulations! You win!');
    } else {
        console.log('Sorry! The number was ' + random_number);
    }
}