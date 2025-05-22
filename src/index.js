import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cart';
import { AuthProvider } from './context/auth';
import { SearchProvider } from './context/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
  <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>
  </SearchProvider>
  </AuthProvider>
);

reportWebVitals();
