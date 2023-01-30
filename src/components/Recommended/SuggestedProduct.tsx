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
      <h3>{name}</h3>
      <Box className="suggested-product-subtitle">
        <span className="suggested-product-priceRange">{priceRange}</span>
        <span className="suggested-product-minimum">Minimum: {minimum}</span>
      </Box>
    </Box>
  );
};
