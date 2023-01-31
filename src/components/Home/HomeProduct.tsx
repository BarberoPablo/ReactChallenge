import React, { useState } from "react";
import { Box, Button, Alert } from "@mui/material";
import { HomeProductLayout } from "../assets/products-JSON";
import { parseNumber } from "../Cart/CartProduct";
import "./HomeProduct.css";

export const HomeProduct: React.FC<HomeProductLayout> = ({
  image,
  name,
  price,
  code,
  content,
  setCartProducts,
  stock,
}) => {
  const parsedPrice = parseNumber(price);
  const storage = window.localStorage;
  const [showAlert, setShowAlert] = useState(false);
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const itemExists = storage.getItem(code);

    if (!itemExists) {
      storage.setItem(
        code,
        JSON.stringify({ name, quantity: 1, content, price, image, stock, code })
      );
      setCartProducts((prev: number) => prev + 1);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <Box className="home-product-container">
      {showAlert && (
        <Alert severity="success" style={{ position: "fixed", top: "20%" }}>
          Product already added to cart!
        </Alert>
      )}
      <Box className="home-product-image">
        <img src={image} alt="Product image" />
      </Box>

      <Box style={{ height: "10px", backgroundColor: "white" }} />

      <Box className="home-product-first-row">
        <Box className="home-produt-price">{parsedPrice}</Box>
        <Box className="home-product-stock">({stock} available) </Box>
      </Box>

      <Box className="home-product-title">{name}</Box>

      <Button
        style={{
          fontFamily: "Open Sans",
          border: "2px solid #3A4451",
          marginTop: "12px",
          backgroundColor: "#3A4451",
          width: "100%",
        }}
        onClick={(e) => handleAddToCart(e)}
      >
        Add to cart
      </Button>
    </Box>
  );
};
