import React, { useState } from 'react';
import Slide from './Slide';
import { Navigation } from 'swiper/modules';
import SliderNavigation from './SliderNavigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import '../styles/slider.scss';

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
    const prevButtonClass = 'swiper-prev-button';
    const nextButtonClass = 'swiper-next-button';

    const handleSlideChange = (event: { activeIndex: number }): void => {
        setCurrentSlide(event.activeIndex);
    };

    return (
        <div className="slider">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={{
                    nextEl: `.${nextButtonClass}`,
                    prevEl: `.${prevButtonClass}`,
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
            <SliderNavigation 
                products={products}
                currentSlide={currentSlide} 
                prevButtonClass={prevButtonClass} 
                nextButtonClass={nextButtonClass} 
            />
        </div>
    );
};

Slider.displayName = 'Slider';
