function mainFunction(){
    console.log('I am the main function. I will call the hoistedFunction before it even exist.')
    hoistedFunction();
}

function hoistedFunction(){
    console.log('I am a hoisted function. I am called by the main function before I even exist.')
}

mainFunction();