const products = require("./product");
const cart = require("./cart");
const order = require("./order");

// Add products to the cart
cart.addToCart(products[0]);
cart.addToCart(products[2]);

// Display cart items
console.log("Cart Items: ", cart.getCartItems());

// Calculate and display the total order amount
const totalAmount = order(cart.getCartItems());
console.log("Total order amount: PHP", totalAmount);
