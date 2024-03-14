/*
    Callback function:
        A function that is passed as an argument to another function. 
        Used to handle asynchronous operations.
*/

sortLaundry();

function sortLaundry() {
  setTimeout(() => {
    console.log("Sort laundry by color and fabric.");
  }, 2000);
}

function loadClothes() {
  setTimeout(() => {
    console.log("Load clothes into washing machine.");
  }, 2000);
}
