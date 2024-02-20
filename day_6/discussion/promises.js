// Promises
// Objects that would return 

const step4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step 1 Complete')
            resolve();
        }, 1000);
    });
}

const step5 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step 2 Complete')
            resolve();
        }, 1000);
    });
}

const step6 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step 3 Complete')
            resolve();
        }, 1000);
    });
}

// Chaining Promises
step4()
    .then(step5)
    .then(step6)
    .then(() => {
        console.log('All steps complete.');
    })
    .catch((error) => {
        console.log("Error: ", error);
    });