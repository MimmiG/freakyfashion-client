import React from 'react';
import { useNavigate } from 'react-router-dom';
import { placeOrder } from '../api';

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    placeOrder().then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button className="btn btn-primary" onClick={handleCheckout}>Place Order</button>
    </div>
  );
}

export default Checkout;
