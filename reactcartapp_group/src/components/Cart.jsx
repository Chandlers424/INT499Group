import React from "react";
import "./styles.css";

const Cart = ({ cart, setCart }) => {
  const updateQuantity = (id, amount) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.service} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.service}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-container">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">❌ Remove</button>
              </li>
            ))}
          </ul>
          <h3 className="total-cost">Total: ${totalCost}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
