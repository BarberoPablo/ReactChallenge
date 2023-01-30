import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
//NavBar
//Conteiner

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
