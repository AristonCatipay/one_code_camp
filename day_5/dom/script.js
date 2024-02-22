// DOM - Document Object Model
//       Object that represents the page you see in the web browser.
//       and provides you with an API to interact with it.
//       Web Browser constructs the DOM when it loads an HTML document.
//       and structures all the elements in a tree-like representation.
//       Javascript can access the DOM to dynamically change the content
//       structure, and style a web page.

// Get element by ID
var headingElement = document.getElementById('heading');
console.log(headingElement);

// Get element by Class name
// This will return a HTMLCollection
// Classes are mostly used to style a group of tags
// It also show how many tags have that specific class name
var textElement = document.getElementsByClassName('text');
console.log(textElement);

// Get element by tag name
// This will return a HTMLCollection
var listItems = document.getElementsByTagName('li');
console.log(listItems);

// Get element by query selector
let container = document.querySelector('#container');
console.log(container);

// Get elements by parent node
var listParent = document.getElementById("parentList").parentNode;
console.log(listParent);

// Get elements by children node
var containerChildren = document.getElementById('container').children;
console.log(containerChildren);

var containerChildrenNodes = document.getElementById('container').childNodes;
console.log(containerChildrenNodes);


// Modify HTML elements using inner HTML
// We access the headingElement form the top.
// It can modify not just the text/content but the other elements as well.
// It also accepts template literals.
headingElement.innerHTML = 'Updated content';

// Modifying text content
// It can only manipulate the content itself.
var textElement = document.getElementsByClassName('text')[0];
textElement.textContent = 'I am a modified paragraph.';

// Event handlers
// OnClick
// Hover
// Keypress
// onSubmit
// onmouseenter

const button = document.getElementById('btn')
// Syntax: button.addEventListener("action", method);
button.addEventListener("click", handleClick);

function handleClick(event){
    console.log("Button Clicked");
}