// ProductList.js
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  const styles = {
    productList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '10px',
    },
  };

  return (
    <div style={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;