import React from 'react';
import { createRoot } from 'react-dom/client';
import PageContainer from './components/PageContainer';
import './styles/index.scss';

const rootContainer = document.getElementById('root');

if (rootContainer) {
    const root = createRoot(rootContainer);
    root.render(<PageContainer />);
}
