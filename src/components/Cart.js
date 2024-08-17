import React, { useEffect, useState } from 'react';
import { fetchCartItems, removeFromCart } from '../api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems().then(response => setCartItems(response.data));
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id).then(() => setCartItems(cartItems.filter(item => item.id !== id)));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <button className="btn btn-danger btn-sm" onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
