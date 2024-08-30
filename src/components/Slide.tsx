import React, { useState } from 'react';
import '../styles/slide.scss';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import { Product } from './Slider';

export default function Slide({ product, isSlideActive }: { product: Product, isSlideActive: boolean }): JSX.Element {
    return (
        <div 
            className={"slide"}
            key={product.id}
        >
            <div className="slide__description">
                <p>{product.brand}</p>
                <strong className="slide__title">{product.title}</strong>
                <p>{product.description}</p>
            </div>
            <img src={product.thumbnail} alt="product-image" className="slide__image" />
        </div>   
    );
};

Slide.displayName = 'Slide';
