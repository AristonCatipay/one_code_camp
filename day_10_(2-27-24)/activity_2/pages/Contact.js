import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleShow();
        }

    return (
    <Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Message Content</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h6>Email: {email == '' ? 'Guest' : email }</h6>
            <span>Message: <br/> { message == '' ? 'Address is private' : message }</span>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="success" onClick={handleClose}>
                Send
            </Button>
            </Modal.Footer>
        </Modal>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} value={message} onChange={(event) => setMessage(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>Send</Button>
        </Form>
    </Container>
    )
}

export default Contact
