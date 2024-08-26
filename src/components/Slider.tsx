import React, { useState } from 'react';
import '../styles/slider.scss';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import Slide from './Slide';

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    brand: string;
    thumbnail: string;
}

export default function Slider({ products }: { products: Array<Product> }): JSX.Element {
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
            <ul className="slider__slide-container">
                {products.map((product: Product, index: number) => {
                    return <Slide product={product} isSlideActive={currentSlide === index} />;
                })}
            </ul>
            <div className="slider__navigation">
                <div className="slider__bulletContainer">
                    {products.map((product, index) => {
                    return (
                        <div className={currentSlide === index ? "slider__bullet slider__bullet--enabled" : "slider__bullet"} />
                    );
                })}
                </div>
                <div className="slider__button-container">
                    <button onClick={showPrevSlide} disabled={isPrevButtonDisabled} className="slider__button slider__button--prev">
                        <LeftArrow fill={isPrevButtonDisabled ? colorGrey : colorWhite} />
                    </button>
                    <button onClick={showNextSlide} disabled={isNextButtonDisabled} className="slider__button slider__button--next">
                        <RightArrow fill={isNextButtonDisabled ? colorGrey : colorWhite} />
                    </button>
                </div>
            </div>
        </div>
    );
};

Slider.displayName = 'Slider';
