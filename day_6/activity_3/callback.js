function mainFunction(callbackFunction, attempt=1){
    setTimeout(() => {
        let randomNumber = callbackFunction();

        if (randomNumber < 80) {
            if (attempt < 10){
                console.log(`Attempt #${attempt}: EmitRandomNumber is called.`);
                console.log(`2 seconds have lapsed.`);
                console.log(`Random number generated is ${randomNumber}.`);
                mainFunction(callbackFunction, attempt + 1);
            } else {
                console.log('Maximum attempt reached.')
            }
        } else {
            console.log(`Random number generated is ${randomNumber}.`);
        }
    }, 2000);
}

function emitRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
}

mainFunction(emitRandomNumber);