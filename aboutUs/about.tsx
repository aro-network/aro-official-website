import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from '../src/aboutUs';

createRoot(document.getElementById('root1')!).render(
  <StrictMode>
    <About />
  </StrictMode>,
)
