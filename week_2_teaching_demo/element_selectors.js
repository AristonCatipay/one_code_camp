// Element Selectors
// Methods used to target and manipulate HTML elements.
// They allow you to select one or multiple HTML elements from the DOM.

// Element Selector                                  Return
// 1. document.getElementById(id)                    Element or Null
// 2. document.getElementByClassName(class)          HTML Collection (Live)
// 3. document.getElementByTagName(tag)              HTML Collection (Live)
// 4. document.querySelector()                       First Element or Null
// 5. document.querySelectorAll()                    Nodelist (Static)

// HTML Collections are similar with arrays but have limited amount of utility methods. 
// Don't have a forEach method but you can use type cast and set it to Array.

// ID
// const welcomeMessage = document.getElementById('welcome-message');
// welcomeMessage.style.backgroundColor = 'yellow';

// CLASS

// const cars = document.getElementsByClassName('cars');

// cars[2].style.backgroundColor = 'yellow';
// for (let car of cars){
//     car.style.backgroundColor = 'yellow';
// }

// Array.from(cars).forEach(car => {
//     car.style.backgroundColor = 'yellow';
// });

// console.log(cars);

// TAG

// const movies = document.getElementsByTagName('li');

// movies[0].style.backgroundColor = 'yellow';
// for (let movie of movies){
//     movie.style.backgroundColor = 'yellow';
// }

// Array.from(movies).forEach(movie => {
//     movie.style.backgroundColor = 'yellow';
// });

// console.log(movies);


// QUERY
// Class Name
// Tag Name

// const car = document.querySelector('.cars');
// car.style.backgroundColor = 'yellow';

// QUERY ALL
// Class Name
// Tag Name
// const cars = document.querySelectorAll('h3');
// cars[1].style.backgroundColor = 'yellow'; 

// for (let car of cars){
//     car.style.backgroundColor = 'yellow';
// }

// cars.forEach(car => {
//     car.style.backgroundColor = 'yellow';
// })

// console.log(cars);
