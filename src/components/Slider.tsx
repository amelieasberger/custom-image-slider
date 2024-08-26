import React from 'react';
import '../styles/slider.scss';

interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    tags: Array<string>;
    brand: string;
    weight: number;
    returnPolicy: string;
    images: [];
    thumbnail: string;
}

export default function Slider({ products }: { products: Array<Product> }) {
    console.log(products);

    return (
        <div className="slider">
            {products.map((product: Product, index: number) => {
                return (
                    <div 
                        className="slider__slide"
                        key={product.id}
                    >
                        <img src={product.thumbnail} alt="cat-image" />
                    </div>
                )
            })}
        </div>
    );
};

Slider.displayName = 'Slider';
