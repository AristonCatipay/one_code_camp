/*
    Promises: 
        Objects representing eventual completion or failure of an operation.

    Promise objects can be resolved or rejected.
        resolved - if the task completed successfully. 
        rejected - if the task failed.

    Promise Syntax:
        new Promise((resolve, reject) => { asynchronous code })
*/

function sortLaundry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskSuccessful = false;
      if (taskSuccessful) {
        resolve("Sort laundry by color and fabric.");
      } else {
        reject("You didn't sort the laundry by color and fabric.");
      }
    }, 2000);
  });
}

sortLaundry()
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
