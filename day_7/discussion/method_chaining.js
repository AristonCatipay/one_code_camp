// Method Chaining
// Method chaining in JavaScript is a technique that allows you to call multiple methods on an object one after another in a single statement.
// It is achieved by returning the object itself (this) from each method, which enables subsequent method calls to be chained onto the returned object.

class EmailBuilder{
    constructor(){
        this.attachments = [];
    }

    setRecipient(recipient){
        this.recipient = recipient;
        return this;
    }

    setSubject(subject){
        this.subject = subject;
        return this;
    }

    setBody(body){
        this.body = body;
        return this;
    }

    setAttachments(...attachments){
        this.attachments.push(attachments);
        return this;
    }

    send(){
        console.log(`Sending email:\nRecipient: ${this.recipient}\nSubject: ${this.subject}\nBody: ${this.body}\nAttachments: ${this.attachments}`);
    }
}

const email1 = new EmailBuilder();
email1
    .setRecipient('John Doe')
    .setSubject('Rest')
    .setBody('Remember to take rest from time to time Joe')
    .setAttachments('image', 'file')
    .send();     