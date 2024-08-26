import React from 'react';
import { createRoot } from 'react-dom/client';
import SliderContainer from './src/components/SliderContainer';
import './src/styles/index.scss'

const rootContainer = document.getElementById('root');

if (rootContainer) {
    const root = createRoot(rootContainer);
    root.render(<SliderContainer />);
}

