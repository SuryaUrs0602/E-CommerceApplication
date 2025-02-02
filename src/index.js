import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Context/ProductContext';
import { FilterContextProvider } from './Context/FilterContext';
import { CartProvider } from './Context/CartContext';
import { WishListProvider } from './Context/WishListContext';
import { AuthProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <WishListProvider>
              <App />
            </WishListProvider>
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
