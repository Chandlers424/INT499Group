import React from "react";
import list from "../data/data";
import "./styles.css";

const SubscriptionList = ({ cart, setCart }) => {
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (item.type === "subscription") {
      const hasSubscription = cart.some((cartItem) => cartItem.type === "subscription");
      if (hasSubscription) {
        alert("You can only have one subscription at a time!");
        return;
      }
    }

    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="container">
      <h2>Choose Your Subscription</h2>
      <div className="subscription-list">
        {list.map((item) => (
          <div key={item.id} className="subscription-item">
            <img src={item.img} alt={item.service} className="small-image" />
            <h3>{item.service}</h3>
            <p>{item.serviceInfo}</p>
            <p className="price">${item.price}</p>
            <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionList;
