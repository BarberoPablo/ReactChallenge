import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const updateCart = (quantity: number) => {
    setTotalProducts(quantity);
  };

  return (
    <>
      <NavBar totalProducts={totalProducts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart updateCart={updateCart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
