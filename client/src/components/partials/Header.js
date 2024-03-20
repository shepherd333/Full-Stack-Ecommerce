import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    logo: {
      fontSize: '24px',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
    },
    search: {
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: '5px',
      padding: '5px',
      width: '200px',
    },
    user: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    userLink: {
      color: '#fff',
      textDecoration: 'none',
    },
    cart: {
      position: 'relative',
    },
    cartDropdown: {
      display: isCartOpen ? 'block' : 'none',
      position: 'absolute',
      backgroundColor: '#f9f9f9',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      padding: '12px 16px',
      zIndex: 1,
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>The Local Artisan</div>
      <nav style={styles.nav}>
        <a style={styles.navLink} href="/men">Men</a>
        <a style={styles.navLink} href="/women">Women</a>
        <a style={styles.navLink} href="/kids">Kids</a>
        <a style={styles.navLink} href="/accessories">Accessories</a>
      </nav>
      <input style={styles.search} type="text" placeholder="Search" />
      <div style={styles.user}>
        <a style={styles.userLink} href="/account">Account</a>
        <div style={styles.cart} onClick={(event) => {
          event.preventDefault();
          setIsCartOpen(!isCartOpen);
        }}>
          <a style={styles.userLink} href="/cart">Cart</a>
          <div style={styles.cartDropdown}>
            {cart.map((item, index) => (
              <p key={index}>{item.name} - {item.quantity}</p>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;