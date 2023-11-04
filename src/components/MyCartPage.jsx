// CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const MyCartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    // Dispatch an action to reset the cart and show a success message
    dispatch(checkout());
    alert('Items have been checked out successfully!');
  };

  return (
    <div>
      <h1>My Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>

      <div className="checkout-sidebar">
        <h2>Checkout</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>Price: {item.price}</p>
            </li>
          ))}
        </ul>
        <p>Total Price: ${cart.reduce((total, item) => total + item.price, 0)}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default MyCartPage;
