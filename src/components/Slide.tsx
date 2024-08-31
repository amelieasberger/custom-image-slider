import React from 'react';
import '../styles/slide.scss';
import type { Product } from './Slider';

export default function Slide({ product, isSlideActive }: { product: Product, isSlideActive: boolean }): React.JSX.Element {
    return (
        <div className="slide" key={product.id}>
            <div className="slide__information">
                <span>{product.brand}</span>
                <strong className="slide__title">{product.title}</strong>
                <p className="slide__description">{product.description}</p>
            </div>
            <img src={product.thumbnail} alt={product.title} className="slide__image" />
        </div>   
    );
};

Slide.displayName = 'Slide';
