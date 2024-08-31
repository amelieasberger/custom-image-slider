import { render } from '@testing-library/react';
import React from 'react';
import SliderNavigation from '../components/SliderNavigation';

const testProducts = [
    {
        id: 1,
        name: 'meow',
    },
    {
        id: 2,
        name: 'wuff',
    },
];

describe('SliderNavigation tests', () => {
    it('should contain 2 bullets for 2 products', () => {
        render(<SliderNavigation products={testProducts} currentSlide={1} />);

        const container = document.getElementById("navigation");
        const bullets = container?.getElementsByClassName("navigation__bullet");

        expect(bullets?.length).toBe(2);
    });
    it('one bullet should be active', () => {
        render(<SliderNavigation products={testProducts} currentSlide={1} />);

        const container = document.getElementById("navigation");
        const bullets = container?.getElementsByClassName("navigation__bullet navigation__bullet--active");

        expect(bullets?.length).toBe(1);
    });
});
