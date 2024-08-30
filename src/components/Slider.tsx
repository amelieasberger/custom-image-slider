import React, { useState } from 'react';
import '../styles/slider.scss';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import Slide from './Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

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
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const isPrevButtonDisabled = currentSlide === 0;
    const isNextButtonDisabled = currentSlide === products.length - 1;

    const handleSlideChange = (event: { activeIndex: number }): void => {
        setCurrentSlide(event.activeIndex);
    };

    return (
        <div className="slider">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-next-button',
                    prevEl: '.swiper-prev-button',
                }}
                onSlideChange={handleSlideChange}
                spaceBetween={10}
            >
                {products.map((product: Product, index: number) => 
                    <SwiperSlide key={`slide_${product.id}`}>
                        <Slide product={product} isSlideActive={currentSlide === index} />;
                    </SwiperSlide>
                )}
            </Swiper>
            <div className="slider__navigation">
                <div className="slider__bullet-container">
                    {products.map((product, index) => 
                        <div
                            key={`bullet_${product.id}`} 
                            className={currentSlide === index ? 'slider__bullet slider__bullet--enabled' : 'slider__bullet'} 
                        />
                    )}
                </div>
                <div className="slider__button-container">
                    <button disabled={isPrevButtonDisabled} className="swiper-prev-button slider__button">
                        <LeftArrow isDisabled={isPrevButtonDisabled} />
                    </button>
                    <button disabled={isNextButtonDisabled} className="swiper-next-button slider__button">
                        <RightArrow isDisabled={isNextButtonDisabled} />
                    </button>
                </div>
            </div>
        </div>
    );
};

Slider.displayName = 'Slider';
