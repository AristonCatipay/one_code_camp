/*
    Method chaining: Sequentially calling multiple methods on a promise object.
*/

function sortLaundry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskSuccessful = true;
      if (taskSuccessful) {
        resolve("Sort laundry by color and fabric.");
      } else {
        reject("You didn't sort the laundry by color and fabric.");
      }
    }, 2000);
  });
}

function loadClothes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskSuccessful = true;
      if (taskSuccessful) {
        resolve("Load clothes into washing machine.");
      } else {
        reject("You didn't Load clothes into washing machine.");
      }
    }, 2000);
  });
}

function addChemicals() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskSuccessful = true;
      if (taskSuccessful) {
        resolve("Add detergent and fabric softener.");
      } else {
        reject("You didn't add detergent and fabric softener.");
      }
    }, 2000);
  });
}

function setSettings() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskSuccessful = true;
      if (taskSuccessful) {
        resolve("Select appropriate wash cycle and settings.");
      } else {
        reject("You didn't select appropriate wash cycle and settings.");
      }
    }, 2000);
  });
}

function startMachine() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskSuccessful = true;
      if (taskSuccessful) {
        resolve("Start machine and wait patiently.");
      } else {
        reject("You didn't start machine and wait patiently.");
      }
    }, 2000);
  });
}

sortLaundry()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
