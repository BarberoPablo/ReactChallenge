import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { HomeProductLayout } from "../assets/types";
import { parseNumber } from "../assets/utils";
import "./HomeProduct.css";
import { ActionTypes, DataContext } from "../../context/DataContext";

export const HomeProduct: React.FC<HomeProductLayout> = ({
  image,
  name,
  price,
  code,
  content,
  stock,
}) => {
  const parsedPrice = parseNumber(price);

  //  Destructuring of both DataContext props
  const { state, dispatch } = useContext(DataContext);

  if (!dispatch) {
    throw new Error("Dispatch function not found in context");
  }

  return (
    <Box className="home-product-container">
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
        onClick={() =>
          dispatch({
            type: ActionTypes.ADD_PRODUCT_TO_CART,
            payload: { name, quantity: 1, content, price, image, stock, code },
          })
        }
      >
        Add to cart
      </Button>
    </Box>
  );
};
