import React from "react";
import { Box, Alert } from "@mui/material";

import { HomeProduct } from "./HomeProduct";
import { products, cartInterface as homeInterface } from "../assets/products-JSON";
import "./Home.css";

export const Home: React.FC<homeInterface> = ({ updateCart }) => {
  return (
    <Box className="home-container">
      <span className="cart-title">Best sellers</span>
      <Box className="home-all-products">
        {products?.length &&
          products.map((product) => {
            return (
              <Box key={product.name}>
                <HomeProduct
                  code={product.code}
                  name={product.name}
                  content={product.content}
                  price={product.price}
                  image={product.image}
                  setCartProducts={updateCart}
                  stock={product.stock}
                />
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
