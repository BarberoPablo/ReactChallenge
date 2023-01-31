import React, { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { Button } from "@mui/material-next";
import { products, cartInterface } from "../assets/products-JSON";
import { CartProduct } from "./CartProduct";
import { RecommendedSection } from "../Recommended/RecommendedSection";
import "./Cart.css";

export const Cart: React.FC<cartInterface> = ({ updateCart }) => {
  const [allProducts, setAllProducts] = useState(products);
  const [quantity, setQuantity] = useState(calculateTotalProducts());
  const [totalPrice, setTotalPrice] = useState(parseNumber(calculateTotalPrice()));

  function parseNumber(number: number): string {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
    }).format(number);
  }

  useEffect(() => {
    setTotalPrice(parseNumber(calculateTotalPrice()));
  }, [allProducts]);

  useEffect(() => {
    console.log("UEPA");
    setQuantity(allProducts.length);
    updateCart(allProducts.length);
  }, [allProducts.length]);

  function calculateTotalPrice() {
    return allProducts.reduce(
      (productA, productB) => productA + productB.price * productB.quantity,
      0
    );
  }

  function calculateTotalProducts() {
    const totalProducts = allProducts.reduce(
      (productA, productB) => productA + Number(productB.quantity),
      0
    );
    return totalProducts;
  }

  return (
    <Box className="cart-main-container">
      <Box className="cart-container">
        <Box className="cart-orders">
          <span className="cart-title">
            <b>Your cart ({quantity})</b>
          </span>

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

        <Box className="order-summary-container">
          <span className="order-summary-title">Order Summary</span>

          <Box className="order-summary-quantity">
            <span> Number of items</span> <span style={{ textAlign: "right" }}>{quantity}</span>
          </Box>

          <Divider style={{ marginTop: "15px" }} />

          <Box className="order-summary-total-container">
            <span className="order-summary-total">Total:</span>
            <span className="order-summary-price">{totalPrice}</span>
          </Box>

          <Box className="order-summary-buttons">
            <Button variant="filled" sx={{ backgroundColor: "#3A4451" }}>
              Proceed to Checkout
            </Button>
            <Button style={{ border: "2px solid #091625", marginTop: "12px", color: "#091625" }}>
              Continue shopping
            </Button>
          </Box>
        </Box>
      </Box>

      <RecommendedSection />
    </Box>
  );
};
