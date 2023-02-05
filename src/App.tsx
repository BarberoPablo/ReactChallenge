import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
