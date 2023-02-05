import React from "react";
import { Box } from "@mui/material";
import { recommendedProducts } from "../assets/products";
import { SuggestedProduct } from "./SuggestedProduct";
import "./RecommendedSection.css";

export const RecommendedSection = () => {
  return (
    <Box className="recommended-products-container">
      <Box className="recommended-products-title">
        <span>You might also like</span>
      </Box>
      <Box className="recommended-products">
        {recommendedProducts.length &&
          recommendedProducts.map((product, index) => (
            <SuggestedProduct
              key={product.name + index}
              image={product.image}
              name={product.name}
              priceRange={product.priceRange}
              minimum={product.minimum}
            />
          ))}
      </Box>
    </Box>
  );
};
