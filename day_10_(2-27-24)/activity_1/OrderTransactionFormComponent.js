import React, {useState} from 'react'

function FormComponent() {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');
  const [product1Checked, setProduct1Checked] = useState(false);
  const [product2Checked, setProduct2Checked] = useState(false);
  const [product1Counter, setProduct1Counter] = useState(0);
  const [product2Counter, setProduct2Counter] = useState(0);

  const product1Price = 10;
  const product2Price = 15;

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting.
    console.log('ORDER COMPLETE');
    console.log('Customer Name: ', customerName == '' ? 'Guest' : customerName);
    console.log('Delivery Address: ', deliveryAddress == '' ? 'Address is private' : deliveryAddress);
    console.log('Contact Number: ', contactNumber == '' ? 'Contact is private' : contactNumber);
    console.log('ORDER DETAILS');
    if (product1Checked && product1Counter > 1) {
      console.log(`${product1} X ${product1Counter} = ${product1Price * product1Counter}`);
    }
    if (product2Checked && product2Counter > 1) {
      console.log(`${product2} X ${product2Counter} = ${product2Price * product2Counter}`);
    }
    console.log('Total: ', calculateTotalPrice())
    
  }

  const calculateTotalPrice = () => {
    return product1Counter * product1Price + product2Counter * product2Price;
  };

  return (
    <div>
      <form>
        <h1>Order Form</h1>
        <div>
          <label htmlFor='customer-name'>Customer Name: </label>
          <input id='customer-name' type='text' value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor='delivery-address'>Delivery Address: </label>
          <input id='delivery-address' type='text' value={deliveryAddress} onChange={(event) => setDeliveryAddress(event.target.value)}/>
        </div>
        <div>  
          <label htmlFor='contact-number'>Contact Number: </label>
          <input id='contact-number' type='text' value={contactNumber} onChange={(event) => setContactNumber(event.target.value)}/>
        </div>
        <h1>Product</h1>
        <div>
          <input type="checkbox" id="product-1" name="product-1" value="Limited Edition V88 T-Shirt" checked={product1Checked}
          onChange={() => {
            setProduct1Checked(!product1Checked); 
            if (!product1Checked) {
            setProduct1("Limited Edition V88 T-Shirt");
            } else {
              setProduct1("");
            }}}/>
          <label htmlFor="product-1">Limited Edition V88 T-Shirt</label><br/>
          {product1Checked && (
            <div>
              <button type="button" onClick={() => setProduct1Counter(product1Counter + 1)}>+</button>
              <h6>QTY: {product1Counter}</h6>
              <button type="button" onClick={() => setProduct1Counter(product1Counter - 1)}>-</button>
            </div>
          )}
        </div>
        <div>
          <input type="checkbox" id="product-2" name="product-2" value="Limited Edition V88 Cap" checked={product2Checked}
            onChange={() => {
              setProduct2Checked(!product2Checked); 
              if (!product2Checked) {
              setProduct2("Limited Edition V88 Cap");
              } else {
                setProduct2("");
              }}}/>
          <label htmlFor="product-2">Limited Edition V88 Cap</label><br/>
          {product2Checked && (
            <div>
              <button type="button" onClick={() => setProduct2Counter(product2Counter + 1)}>+</button>
              <h6>QTY: {product2Counter}</h6>
              <button type="button" onClick={() => setProduct2Counter(product2Counter - 1)}>-</button>
            </div>
          )}
        </div>
        <button type='submit' onClick={handleSubmit}>PLACE ORDER</button>
      </form>
    </div>
  )
}

export default FormComponent
