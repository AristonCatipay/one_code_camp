// Async and await
// Every function inside asynch will become asynchronous
// More concise.

const step7 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step 1 Complete')
            resolve();
        }, 1000);
    });
}

const step8 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step 2 Complete')
            resolve();
        }, 1000);
    });
}

const step9 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step 3 Complete')
            resolve();
        }, 1000);
    });
}

const performSteps = async () => {
    try {
        await step7();
        await step8();
        await step9();
        console.log("All steps complete.");
    } catch (error){
        console.log("Error: ", error);
    }
};

performSteps();