// Using callbacks
const getData = (callback) => {
    setTimeout(() => {
        const data = 'This is a data';
        callback(data);
    }, 4000);
};

const processData = (data) => {
    console.log("Processed data: ", data);
};

getData(processData);


// Callback Hell
// Piramid pattern of callbacks. Nested callback functions.
const step1 = (callback) => {
    setTimeout(() => {
        console.log('Step 1 Complete')
        callback();
    }, 1000);
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log('Step 2 Complete')
        callback();
    }, 1000);
}

const step3 = (callback) => {
    setTimeout(() => {
        console.log('Step 3 Complete')
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps complete.")
        });
    });
});