// HomePage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts, addToCart } from "./actions"; // Import your actions
import {fetchProducts,addItem,} from '../features/todo/todoSlice'


const HomePage = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      // Check if the product is not already in the cart
      dispatch(addToCart(product));
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
