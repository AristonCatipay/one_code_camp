/*
    Callback function:
        A function that is passed as an argument to another function. 
        Used to handle asynchronous operations.
*/

sortLaundry(() => {
  loadClothes();
});

function sortLaundry(callback) {
  setTimeout(() => {
    console.log("Sort laundry by color and fabric.");
    callback();
  }, 2000);
}

function loadClothes() {
  setTimeout(() => {
    console.log("Load clothes into washing machine.");
  }, 2000);
}
