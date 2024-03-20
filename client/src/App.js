// App.js
import React from 'react';
import { CartProvider } from './contexts/CartContext'; // Import CartProvider
import HomePage from './components/pages/HomePage'; // Import HomePage

const App = () => {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
};

export default App;