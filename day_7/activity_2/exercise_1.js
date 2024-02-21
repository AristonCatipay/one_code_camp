// Shopping cart 1
// Create a new class called Item with the following

// Properties/Attributes:
// name
// price
// stock
// sold

// Create 3 instances of item.
// Now add a constructor method to the class and require the user to specify the name,
// price, and stock of each instance. In the constructor also specify in the code so that
// the initial sold is set to be 0 whenever a new instance is created.

// Add the following functions for this class:
// logDetails() - have this method display the item's name, price, number of stock, and the total sold. 
// buy() - have it display "Buying" on the screen and increase the total sold by 1. 
// return() - have it display "Returning" on the screen and decrease the total sold by 1.

// Have the first instance buy three times, return once, and have it logDetails(). 
// Have the second instance buy twice, return twice, and have it logDetails(). 
// Have the third instance return three times and logDetails().
// What would you do to prevent the instance from having negative sold, and buying out-of-stock?

class Item{
    constructor(name, price, stock, sold = 0){
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.sold = sold;
    }

    logDetails(){
        console.log(`Item Details:\nName: ${this.name}\nPrice: ${this.price}\nStock: ${this.stock}\nSold: ${this.sold}`);
    }

    buy(){
        if (this.stock >= 1){
            console.log('Buying...');
            this.sold += 1;
            this.stock -= 1;
        } else {
            console.log('Item is unavailable.');
        }
    }

    return(){
        if (this.sold > 0){
            console.log('Returning...')
            this.sold -= 1;
            this.stock += 1;
        } else {
            console.log("You didn't buy this item.");
        }
    }
}

const firstInstance = new Item('Item 1', 20, 3, 0);
const secondInstance = new Item('Item 2', 20, 3, 0);
const thirdInstance = new Item('Item 3', 20, 3);
firstInstance.buy();
firstInstance.buy();
firstInstance.buy();
firstInstance.return();
firstInstance.logDetails();

secondInstance.buy();
secondInstance.buy();
secondInstance.return();
secondInstance.return();
secondInstance.logDetails();

thirdInstance.return();
thirdInstance.return();
thirdInstance.return();
thirdInstance.logDetails();