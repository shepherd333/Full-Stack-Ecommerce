// HomePage.js
import React, { useEffect, useState } from 'react';
import { CartProvider } from '../../contexts/CartContext'; // Import CartProvider
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import ProductList from '../partials/ProductList';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5001/api/products'); // Replace with your API endpoint
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider> {/* Wrap your components with CartProvider */}
      <div>
        <Header />
        <ProductList products={products} />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default HomePage;