import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { FcLike } from 'react-icons/fc';
import './Products.css';

const Products = (props) => {

    const { title, price, img } = props.product;

    return (
        // <div className="products">
        <div className="product">
            <div className="product-img-area">
                <img src={img} alt={title} />
            </div>
            <div className="product-icons">
                <span><HiShoppingCart className="product-icon" /></span>
                <span><FcLike className="product-icon" /></span>
            </div>
            <div className="product-text-area">
                <h3>{title}</h3>
                <h4>${price}</h4>
            </div>
        </div>
        // </div>
    );
};

export default Products;