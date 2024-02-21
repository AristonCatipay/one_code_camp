// Encapsulation
// Bundle related functions, method, properties inside a class.
// All of the complex implementation details are hidden from the user of an object.
// Real life example: When we open a monitor, we only want the monitor to open. We don't ask how it opens.

// Example:
class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`You deposited ${amount} to your account balance.`);
        console.log(this.getAccountInfo());
    }

    withdraw(amount) {
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`You withdraw ${amount} to your account balance.`);
            console.log(this.getAccountInfo());
        } else {
            console.log(`You tried to withdraw ${amount}. You have insufficient balance.`);
            console.log(this.getAccountInfo());
        }
    }

    getAccountInfo(){
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
    }   
}

const myAccount = new BankAccount('12345564343', 1000);
console.log(myAccount.getAccountInfo());
myAccount.deposit(500);
myAccount.withdraw(1500);
myAccount.withdraw(1500);