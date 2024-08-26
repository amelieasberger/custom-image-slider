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
        <div>
            <h1>Hello Towa, welcome to my product slider</h1>
            {products.length > 0 && (
                <Slider products={products} />
            )}
        </div>
    );
};

PageContainer.displayName = 'PageContainer';
