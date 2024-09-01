import React, { useEffect, useState } from 'react';
import Slider from './Slider';

export default function PageContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then(({ products }) => setProducts(products))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h1>Hello, welcome to my product slider</h1>
            {products.length > 0 && (
                <Slider products={products} />
            )}
        </>
    );
};

PageContainer.displayName = 'PageContainer';
