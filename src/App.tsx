import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import "./App.css";
//NavBar
//Conteiner

{
  /* <Container sx={{ bgcolor: "tomato", height: "100vh" }}>Hello</Container>); */
}

function App() {
  return (
    <>
      <NavBar />
      <Container disableGutters={true}>
        {/* pasar al home una funcion para modificar cartItems */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* SACAR ESTA RUTA */}
          <Route path="/cart" element={<Cart items={3} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
