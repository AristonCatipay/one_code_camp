// Document Object Model (DOM)
// Object that represents the page that you see in the web browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically change the content, structure and style of a web page.

document.title = 'Welcome to Document Object Model Introduction';
document.body.style.backgroundColor = 'yellow';
const username = 'Rachel Green';
const welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.textContent += username === '' ? 'Guest' : username;
console.log(document);