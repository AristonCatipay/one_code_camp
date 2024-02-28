import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function OrderComponent() {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');
  const [product1Checked, setProduct1Checked] = useState(false);
  const [product2Checked, setProduct2Checked] = useState(false);
  const [product1Counter, setProduct1Counter] = useState(0);
  const [product2Counter, setProduct2Counter] = useState(0);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const product1Price = 10;
  const product2Price = 15;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting.
    console.log('ORDER COMPLETE');
    console.log('Customer Name: ', customerName === '' ? 'Guest' : customerName);
    console.log('Delivery Address: ', deliveryAddress === '' ? 'Address is private' : deliveryAddress);
    console.log('Contact Number: ', contactNumber === '' ? 'Contact is private' : contactNumber);
    console.log('ORDER DETAILS');
    if (product1Checked && product1Counter > 1) {
      console.log(`${product1} X ${product1Counter} = ${product1Price * product1Counter}`);
    }
    if (product2Checked && product2Counter > 1) {
      console.log(`${product2} X ${product2Counter} = ${product2Price * product2Counter}`);
    }
    console.log('Total: ', calculateTotalPrice())
    handleShow();
  }

  const calculateTotalPrice = () => {
    return product1Counter * product1Price + product2Counter * product2Price;
  };

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Complete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Customer Name: { customerName === '' ? 'Guest' : customerName }</h6>
          <h6>Delivery Address: { deliveryAddress === '' ? 'Address is private' : deliveryAddress }</h6>
          <h6>Contact Number: { contactNumber === '' ? 'Contact is private' : contactNumber }</h6>
          {product1Checked && product1Counter > 0 && (
            <h6>{product1} X {product1Counter} = {product1Price * product1Counter}</h6>
          )}
          {product2Checked && product2Counter > 0 && (
            <h6>{product2} X {product2Counter} = {product2Price * product2Counter}</h6>
          )}
          <h6>Total: { calculateTotalPrice() }</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>

      <Form>
        <Form.Group className="mb-3" controlId="customer-name">
          <Form.Label>Customer Name:</Form.Label>
          <Form.Control type="text" placeholder="John Doe" value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="customer-name">
          <Form.Label>Delivery Address:</Form.Label>
          <Form.Control type="text" placeholder="BLK 1 LOT 2, Richlane City" value={deliveryAddress} onChange={(event) => setDeliveryAddress(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="customer-name">
          <Form.Label>Contact Number:</Form.Label>
          <Form.Control type="text" placeholder="+639" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)}/>
        </Form.Group>
        {['checkbox'].map((type) => (
        <div key={`${type}1`} className="mb-3">
          <Form.Check
            type={type}
            id={`${type}1`}
            label={`Limited Edition V88 T-Shirt`}
            checked={product1Checked}
            onChange={() => {
              setProduct1Checked(!product1Checked); 
              if (!product1Checked) {
              setProduct1("Limited Edition V88 T-Shirt");
              } else {
                setProduct1("");
              }}}
          />
        </div>
        ))}
        {product1Checked && (
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>QTY: {product1Counter}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">V88 T-Shirt Limited Edition</Card.Subtitle>
                  <Card.Text>
                    Please indicate how many of this product are you planning to buy using the buttons bellow.
                  </Card.Text>
                  <Button className="me-2 px-3" variant="danger" type="button" onClick={() => setProduct1Counter(product1Counter - 1)}>-</Button>
                  <Button className="me-2 px-3" variant="warning" type="button" onClick={() => setProduct1Counter(product1Counter + 1)}>+</Button>
                </Card.Body>
              </Card>
            </div>
          )}
        {['checkbox'].map((type) => (
        <div key={`${type}2`} className="mb-3">
          <Form.Check
            type={type}
            id={`${type}2`}
            label={`Limited Edition V88 Cap`}
            checked={product2Checked}
            onChange={() => {
              setProduct2Checked(!product2Checked); 
              if (!product2Checked) {
              setProduct2("Limited Edition V88 Cap");
              } else {
                setProduct2("");
              }}}
            />
        </div>
        ))}
        {product2Checked && (
            <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>QTY: {product2Counter}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">V88 Cap Limited Edition</Card.Subtitle>
                <Card.Text>
                  Please indicate how many of this product are you planning to buy using the buttons bellow.
                </Card.Text>
                <Button className="me-2 px-3" variant="danger" type="button" onClick={() => setProduct2Counter(product2Counter - 1)}>-</Button>
                <Button className="me-2 px-3" variant="warning" type="button" onClick={() => setProduct2Counter(product2Counter + 1)}>+</Button>
              </Card.Body>
            </Card>
            </div>
          )}
        <Button variant="primary" onClick={handleSubmit}>Order</Button>
      </Form>
    </Container>
  )
}

export default OrderComponent
