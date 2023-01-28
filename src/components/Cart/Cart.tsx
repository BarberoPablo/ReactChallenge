import React from "react";
import { Box, Divider } from "@mui/material";
import { Button } from "@mui/material-next";
import { products } from "../assets/products-JSON";
import { CartProduct } from "./CartProduct";
import { RecommendedSection } from "../Recommended/RecommendedSection";
import "./Cart.css";

export const Cart = () => {
  const quantity = products.reduce((productA, productB) => productA + productB.quantity, 0);
  const totalPrice = products.reduce((productA, productB) => productA + productB.price, 0);

  return (
    <Box>
      <Box className="cart-container">
        <Box className="cart-orders">
          <h1>Your cart ({quantity})</h1>

          {products?.length &&
            products.map((product) => {
              return (
                <Box key={product.name}>
                  <CartProduct
                    name={product.name}
                    quantity={product.quantity}
                    content={product.content}
                    price={product.price}
                    image={product.image}
                  />
                  <Divider />
                </Box>
              );
            })}
        </Box>

        <Box className="cart-summary">
          <h1>Order Summary </h1>
          <Box>
            <h3> Number of items</h3> <h3>{quantity}</h3>
          </Box>
          <Box>
            <h3>Total:</h3> <h1>{totalPrice}</h1>
          </Box>

          <Button
            color="secondary"
            disabled={false}
            variant="filled"
            sx={{ backgroundColor: "#3A4451" }}
          >
            Proceed to Checkout
          </Button>

          <Button color="secondary" disabled={false} variant="outlined">
            Continue shopping
          </Button>
        </Box>
      </Box>

      <RecommendedSection />
    </Box>
  );
};
