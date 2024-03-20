// ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const styles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '20px',
      margin: '10px',
      width: '200px',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    name: {
      fontSize: '18px',
      marginBottom: '10px',
      TextAlign: 'center',
    },
    price: {
      fontSize: '16px',
      color: '#888',
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
    const handleAddToCart = () => {
        addToCart(product);
    };

  return (
    <div style={styles.card}>
      <img style={styles.image} src={product.image} alt={product.name} />
      <div style={styles.name}>{product.name}</div>
      <div style={styles.price}>${product.price}</div>
      <button style={styles.button} onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;