import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <h1>INT499 Team 3 Shop</h1>
      <div className="nav-links">
        <Link to="/">Subscriptions</Link>
        <Link to="/cart">🛒 Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
