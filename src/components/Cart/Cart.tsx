import React, { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { Button } from "@mui/material-next";
import { products } from "../assets/products-JSON";
import { CartProduct } from "./CartProduct";
import { RecommendedSection } from "../Recommended/RecommendedSection";
import "./Cart.css";

export const Cart = () => {
  const [allProducts, setAllProducts] = useState(products);
  const [quantity, setQuantity] = useState(calculateTotalProducts());
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());

  useEffect(() => {
    setQuantity(calculateTotalProducts());
    setTotalPrice(calculateTotalPrice());
  }, [allProducts]);

  function calculateTotalPrice() {
    return allProducts.reduce(
      (productA, productB) => productA + productB.price * productB.quantity,
      0
    );
  }

  function calculateTotalProducts() {
    const rta = allProducts.reduce((productA, productB) => productA + Number(productB.quantity), 0);
    return rta;
  }

  return (
    <Box className="cart-main-container">
      <Box className="cart-container">
        <Box className="cart-orders">
          <h1>Your cart ({quantity})</h1>

          {products?.length &&
            products.map((product, index) => {
              return (
                <Box key={product.name}>
                  <CartProduct
                    name={product.name}
                    quantity={product.quantity}
                    content={product.content}
                    price={product.price}
                    image={product.image}
                    index={index}
                    update={setAllProducts}
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
            <h3>Total:</h3> <h1>{totalPrice.toFixed(2)}</h1>
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
