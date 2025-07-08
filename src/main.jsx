// Vite expects the main entry to be main.jsx or main.js in src/
// Your current entry is likely index.js, so create main.jsx that imports and renders App
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
