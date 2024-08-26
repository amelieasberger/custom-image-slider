import React, { useState } from 'react';
import '../styles/slide.scss';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import { Product } from './Slider';

export default function Slide({ product, isSlideActive }: { product: Product, isSlideActive: boolean }): JSX.Element {
    return (
        <li 
            className={isSlideActive ? "slide" : "slide slide--inactive"}
            key={product.id}
        >
            <div className="slide slide__description">
                <p>{product.brand}</p>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
            </div>
            <img src={product.thumbnail} alt="product-image" className="slide slide__image" />
        </li>   
    );
};

Slide.displayName = 'Slide';
