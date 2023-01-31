import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { codes } from "./components/assets/products-JSON";
import "./App.css";

function App() {
  const storage = window.localStorage;
  const [totalProducts, setTotalProducts] = useState<number>(oldCart());

  function oldCart(): number {
    let totalItemsInCart: number = 0;

    codes.forEach((code) => {
      if (storage.getItem(code)) {
        totalItemsInCart++;
      }
    });
    return totalItemsInCart;
  }

  return (
    <div className="app-container">
      <NavBar totalProducts={totalProducts} />
      <Routes>
        <Route path="/" element={<Home updateCart={setTotalProducts} />} />
        <Route path="/cart" element={<Cart updateCart={setTotalProducts} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
