import React from "react";
import ProductCardComponent from './ProductCardComponent';
import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';

const ProductCardsComponent = () => {
    const products = [
        ['Mens Flat Knit T-Shirt', 899.75, 'Brown', Image1],
        ['Womens Floral Dress', 1012.05, 'White', Image2], 
        ['Mens Sports Shorts', 736.00, 'Black', Image3]
    ];

    return (
        <div>
            {products.map((product, index) => (
                <ProductCardComponent
                    key={index}
                    name={product[0]}
                    price={product[1]}
                    color={product[2]}
                    image={product[3]}
                />
            ))}
        </div>
    );
}

export default ProductCardsComponent;
