// ProductFetch.js
import React, { useState, useEffect } from 'react';
import ProductsList from './ProductsList';

const ParentComponent = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    // Implement your add to cart functionality here
  };

  return <ProductsList products={products} addToCart={addToCart} />;
};

export default ParentComponent;