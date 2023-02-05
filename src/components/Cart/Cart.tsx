import React from "react";
import { Box, Divider } from "@mui/material";
import { Button } from "@mui/material-next";
import { parseNumber } from "../assets/products-JSON";
import { CartProduct } from "./CartProduct";
import { RecommendedSection } from "../Recommended/RecommendedSection";
import "./Cart.css";
import { DispatchContext } from "../../Reducer";

export const Cart: React.FC = () => {
  const { state } = React.useContext(DispatchContext);
  const total = Array.from(state.productsInCart).reduce(
    (total, currentPrice) => total + currentPrice[1].price * currentPrice[1].quantity,
    0
  );

  return (
    <Box className="cart-main-container">
      <Box className="cart-container">
        <Box className="cart-orders">
          <span className="cart-title">Your cart ({state.productsInCart.size})</span>

          {state.productsInCart.size > 0 &&
            Array.from(state.productsInCart).map(([key, value], index) => {
              return (
                <Box key={key}>
                  <CartProduct
                    name={value.name}
                    quantity={value.quantity}
                    content={value.content}
                    price={value.price}
                    image={value.image}
                    stock={value.stock}
                    code={value.code}
                  />
                  <Divider />
                </Box>
              );
            })}
        </Box>

        <Box className="order-summary-container">
          <span className="order-summary-title">Order Summary</span>

          <Box className="order-summary-quantity">
            <span> Number of items</span>{" "}
            <span style={{ textAlign: "right" }}>{state.productsInCart.size}</span>
          </Box>

          <Divider style={{ marginTop: "15px" }} />

          <Box className="order-summary-total-container">
            <span className="order-summary-total">Total:</span>
            <span className="order-summary-price">{parseNumber(total)}</span>
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
