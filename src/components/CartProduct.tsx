import React from "react";
import { Grid, Box, styled, Paper, Button, Divider, Container } from "@mui/material";
import "./CartProduct.css";
import { CartProductProps } from "./products-JSON";

export const CartProduct: React.FC<CartProductProps> = ({
  name,
  quantity,
  content,
  price,
  image,
}) => {
  return (
    <Box className="cart-product">
      <Box className="cart-product-image">
        <img src={image} alt="Product image" />
        {content?.length && <h4>PACK</h4>}
      </Box>

      <Box className="cart-product-info">
        <h3>{name}</h3>
        <h4>Quantity: {quantity}</h4>
        <ul>
          {content?.length &&
            content.map((item, index) => (
              <li key={index}>
                {item.name}: {item.type}
              </li>
            ))}
        </ul>
      </Box>

      <Box>
        <h3>${price}</h3>
        <h3>Total: ${quantity * price}</h3>
      </Box>
    </Box>
  );
};
