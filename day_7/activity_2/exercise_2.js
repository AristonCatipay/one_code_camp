// House
// Create a class called House. In the constructor, allow the user to specify the following attributes: location, price, lot, and type. 
// If the type is Pre-selling, set the discount to 20%. Otherwise, set the discount to be 5%.
// Create five different instances of the class House. 
// In the class have a method called show_all() that returns all the information about the house as a string. 
// In your constructor, call this show_all() method to display information about the house when a new house is created.

class House{
    constructor(location, price, lot, type){
        this.location = location;
        this.price = price;
        this.lot = lot;
        if (type === 'Pre-selling') {
            this.type = type;
            this.discount = 0.2;
        } else {
            this.type = type;
            this.discount = 0.05;
        }
        console.log(this.showAll());
    }
    
    showAll(){
        const discountedPrice = this.price * (1 - this.discount);
        return `Location: ${this.location}\nPrice: ₱${this.price}\nLot: ${this.lot} sqm\nType: ${this.type}\nDiscount: ${this.discount * 100}%\nTotal Price: ₱${discountedPrice}`;
    }
}

const house1 = new House('La Union', 1500000, 100, 'Pre-selling');
const house4 = new House('Metro Manila', 1000000, 150, 'Ready for Occupancy');
