import React, { useState } from 'react';
import '../styles/slider.scss';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';

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

    const [ currentSlide, setCurrentSlide ] = useState(0);

    const showPrevSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };

    const showNextSlide = () => {
        setCurrentSlide(currentSlide + 1);
    };

    const isPrevButtonDisabled = currentSlide === 0;
    const isNextButtonDisabled = currentSlide === products.length - 1;
    const colorGrey = '#919191';
    const colorWhite = '#FFFFFF';


    return (
        <div className="slider">
             <button onClick={showPrevSlide} disabled={isPrevButtonDisabled} className="slider__navigation slider__navigation--prev">
                <LeftArrow fill={isPrevButtonDisabled ? colorGrey : colorWhite} />
            </button>
            {products.map((product: Product, index: number) => {
                return (
                    <div 
                        className={currentSlide === index ? "slider__slide" : "slider__slide slider__slide--inactive"}
                        key={product.id}
                    >
                        <img src={product.thumbnail} alt="cat-image" />
                    </div>
                )
            })}
            <button onClick={showNextSlide} disabled={isNextButtonDisabled} className="slider__navigation slider__navigation--next">
                <RightArrow fill={isNextButtonDisabled ? colorGrey : colorWhite} />
            </button>
        </div>
    );
};

Slider.displayName = 'Slider';
