import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import './index.css';
import App from './App.tsx';

if (typeof window !== 'undefined') {
  (window as any).THREE = {
    ...THREE,
    sRGBEncoding: 3001,
    LinearEncoding: 3000,
  };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
