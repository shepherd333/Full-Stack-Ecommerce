// Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the checkout process (e.g., send the data to your server)
    console.log('Checkout data:', userInfo, paymentMethod, cart);
    // Clear the cart
    setCart([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* User Info */}
      <h2>User Information</h2>
      <input name="name" value={userInfo.name} onChange={handleInputChange} placeholder="Name" required />
      <input name="email" value={userInfo.email} onChange={handleInputChange} placeholder="Email" required />
      <input name="address" value={userInfo.address} onChange={handleInputChange} placeholder="Shipping Address" required />

      {/* Payment Method */}
      <h2>Payment Method</h2>
      <select value={paymentMethod} onChange={handlePaymentChange}>
        <option value="Credit Card">Credit Card</option>
        <option value="Debit Card">Debit Card</option>
        <option value="PayPal">PayPal</option>
      </select>

      {/* Checkout Button */}
      <button type="submit">Checkout</button>
    </form>
  );
};

export default Checkout;