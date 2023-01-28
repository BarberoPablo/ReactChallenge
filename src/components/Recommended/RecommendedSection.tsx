import React, { useState } from "react";
import { Box } from "@mui/material";
import { recommendedProducts, RecommendedProducts } from "../assets/products-JSON";
import { SuggestedProduct } from "./SuggestedProduct";
import "./RecommendedSection.css";

export const RecommendedSection = () => {
  return (
    <>
      <h1>You might also like</h1>
      <Box className="recommended-products">
        {recommendedProducts.length &&
          recommendedProducts.map((product) => (
            <SuggestedProduct
              image={product.image}
              name={product.name}
              priceRange={product.priceRange}
              minimum={product.minimum}
            />
          ))}
      </Box>
    </>
  );
};
