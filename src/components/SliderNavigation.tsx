import React from 'react';
import '../styles/slider-navigation.scss';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import { Product } from './Slider';

export default function SliderNavigation({
    products, 
    currentSlide,
    prevButtonClass,
    nextButtonClass
}: {
    products: Array<Product>, 
    currentSlide: number,
    prevButtonClass?: string,
    nextButtonClass?: string
}): JSX.Element {
    const isPrevButtonDisabled = currentSlide === 0;
    const isNextButtonDisabled = currentSlide === products.length - 1;

    return (
        <div className="navigation" id="navigation">
            <div className="navigation__bullet-container">
                {products.map((product, index) => 
                    <span
                        key={`bullet_${product.id}`} 
                        className={`navigation__bullet${currentSlide === index ? ' navigation__bullet--active' : ''}`} 
                    />
                )}
            </div>
            <div className="navigation__button-container">
                <button disabled={isPrevButtonDisabled} className={`${prevButtonClass} navigation__button`}>
                    <LeftArrow isDisabled={isPrevButtonDisabled} />
                </button>
                <button disabled={isNextButtonDisabled} className={`${nextButtonClass} navigation__button`}>
                    <RightArrow isDisabled={isNextButtonDisabled} />
                </button>
            </div>
        </div>
    );
};

SliderNavigation.displayName = 'SliderNavigation';
