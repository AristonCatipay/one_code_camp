# Document Object Model
Every element in our html will become part of the DOM tree.
The entire HTML file has a corresponding node.

### Document Node (HTML tag) - Top most node
Inside the document node we will have the small nodes.

- head node
- body node

### Body Node
- Nodes that are inside the body are the Element Node
- Comment Node

### Element Node
- Attribute Nodes
- Text Nodes


### Get element by ID
var headingElement = decument.getElementById('heading');
console.log(headingElement)

### Get element by Class name
var textElement = decument.getElementByClassName('text');
console.log(textElement)