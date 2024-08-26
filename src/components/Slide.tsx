import React, { useState } from 'react';
import '../styles/slider.scss';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import { Product } from './Slider';

export default function Slide ({ product, isSlideActive }: { product: Product, isSlideActive: boolean }): JSX.Element {
    return (
        <li 
            className={isSlideActive ? "slider__slide" : "slider__slide slider__slide--inactive"}
            key={product.id}
        >
            <div className="slider__slide--description">
                <p>{product.brand}</p>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
            </div>
            <img src={product.thumbnail} alt="product-image" className="slider__slide--image" />
        </li>   
    );
};

Slide.displayName = 'Slide';
