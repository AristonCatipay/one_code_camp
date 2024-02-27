import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCardComponent = (props) => {
    const { name, price, color, image } = props;

    return (
        <div className="m-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Product Name: {name}</Card.Title>
                <Card.Text>
                    Price: {price} <br/>
                    Color: {color}
                </Card.Text>
                <Button className='mx-2' variant="primary">Add to Cart</Button>
                <Button className='mx-2' variant="primary">Buy</Button>
            </Card.Body>
            </Card>
        </div>
    );
}
    
export default ProductCardComponent;
