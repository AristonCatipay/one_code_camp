// function counter(){
//     let counter_variable = 0;
//     return increment(counter_variable);
// }

// function increment(counter_variable){
//     counter_variable++;
//     return counter_variable;
// }

// let counter1 = counter();
// let counter2 = counter();

// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());

function counter() {
    let counter_variable = 0;

    return function() {
        counter_variable++;
        return counter_variable;
    };
}

let counter1 = counter();
let counter2 = counter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());


