// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        // If the product's quantity is more than 1, decrease it
        setCart(cart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ));
      } else {
        // If the product's quantity is 1, remove it from the cart
        setCart(cart.filter(item => item.id !== productId));
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};