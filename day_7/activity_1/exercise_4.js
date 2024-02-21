// Task: Implement a class BankAccount with properties accountNumber and balance. Add
// methods to deposit, withdraw, and get the account info.

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