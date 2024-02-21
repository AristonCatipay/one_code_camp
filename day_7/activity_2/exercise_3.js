// Email builder
// Create an “EmailBuilder” class that allows you to build an email message with various components. 
// The class should have methods to set the recipient, subject, body, and attachments. 
// Have these methods chained to achieve a real flow on sending an email.
// Add a “send” method that logs the constructed email details 
// (in a real-world scenario, you would implement actual email sending logic).

// Below should be how it should look like:
// Sending email:
// Recipient: john@example.com
// Subject: Meeting Tomorrow
// Body: Hi John, see you the

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
email1.setRecipient('John Doe').setSubject('Rest').setBody('Remember to take rest from time to time Joe').setAttachments('image', 'file').send();