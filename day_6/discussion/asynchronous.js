// asynchronous
// Some of the code will not run right away.
// setTimeOut - Delay the code
// using set time out will result that the third will come after the second because of the delay.
// If there is a timeout it will allow other functionality to run first.
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log('Third');
