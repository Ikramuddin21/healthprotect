import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, []);

    return (
        <>
            <HeroRoute heading="This is our shop" />
            <div className="shop d-flex items-center">
                <div className="products">
                    {
                        products.map(product => <Products key={product.id} product={product} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Shop;