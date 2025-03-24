import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SubscriptionList from "./components/SubscriptionList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<SubscriptionList cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
};

export default App;