/*
    Callback Hell: 
        Excessive nesting of callbacks in asynchronous JavaScript, 
        leading to code that is hard to read and maintain.
*/

sortLaundry(() => {
  loadClothes(() => {
    addChemicals(() => {
      setSettings(() => {
        startMachine(() => {
          console.log("All function execution finished.");
        });
      });
    });
  });
});

function sortLaundry(callback) {
  setTimeout(() => {
    console.log("Sort laundry by color and fabric.");
    callback();
  }, 2000);
}

function loadClothes(callback) {
  setTimeout(() => {
    console.log("Load clothes into washing machine.");
    callback();
  }, 2000);
}

function addChemicals(callback) {
  setTimeout(() => {
    console.log("Add detergent and fabric softener.");
    callback();
  }, 2000);
}

function setSettings(callback) {
  setTimeout(() => {
    console.log("Select appropriate wash cycle and settings.");
    callback();
  }, 2000);
}

function startMachine(callback) {
  setTimeout(() => {
    console.log("Start machine and wait patiently.");
    callback();
  }, 2000);
}
