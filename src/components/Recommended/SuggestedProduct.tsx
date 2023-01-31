import React from "react";
import { Box } from "@mui/material";
import { RecommendedProducts } from "../assets/products-JSON";
import "./SuggestedProduct.css";

export const SuggestedProduct: React.FC<RecommendedProducts> = ({
  image,
  name,
  priceRange,
  minimum,
}) => {
  return (
    <Box className="suggested-product-container">
      <img src={image} />
      <span style={{ fontWeight: "700", fontSize: "16px", lineHeight: "16px" }}>{name}</span>
      <Box className="suggested-product-subtitle">
        <span style={{ width: "100%", fontWeight: "600", fontSize: "15px", lineHeight: "16px" }}>
          {priceRange}
        </span>
        <span
          style={{
            width: "100%",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            textAlign: "right",
            paddingRight: "100px",
          }}
        >
          Minimum: {minimum}
        </span>
      </Box>
    </Box>
  );
};
