import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { reducer, initialState, DispatchContext } from "./Reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <NavBar totalProducts={state.productsInCart.size} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </DispatchContext.Provider>
  );
}

export default App;
