import React, { useEffect, useState } from 'react';
import Slider from './Slider';


export default function SliderContainer() {
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
            <h1>Hallo</h1>
            <div>
                <Slider products={products} />
            </div>
        </div>
    );
};

SliderContainer.displayName = 'SliderContainer';
