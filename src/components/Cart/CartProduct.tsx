import React, { useState } from "react";
import { Box, Divider, Grid, NativeSelect } from "@mui/material";
import { DeleteForever } from "@mui/icons-material/";
import "./CartProduct.css";
import { CartProductProps } from "../assets/products-JSON";

export const CartProduct: React.FC<CartProductProps> = ({
  name,
  quantity,
  content,
  price,
  image,
  index,
  update,
}) => {
  const [newQuantity, setNewQuantity] = useState<number>(Number(quantity));
  const formattedPrice = parseNumber(price);
  const formattedTotal = parseNumber(newQuantity * price);

  function parseNumber(number: number) {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
    }).format(number);
  }

  const handleNewQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setNewQuantity(Number(e.target.value));
    update((prevState: Array<Object>) =>
      prevState.map((item, ind) => {
        return ind === index ? { ...item, quantity: e.target.value } : item;
      })
    );
  };

  const quantityHandler = () => {
    return (
      <Box>
        <NativeSelect
          defaultValue={quantity}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          onChange={handleNewQuantity}
        >
          {quantity > 0 &&
            [...Array(quantity)].map((max: number, index: number) => {
              return (
                <option key={index + "quantity"} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
        </NativeSelect>
      </Box>
    );
  };

  return (
    <Box className="cart-product">
      <Box className="cart-product-image">
        <img src={image} alt="Product image" />
        {content?.length && <span>PACK</span>}
      </Box>

      <Box className="cart-product-info">
        <h3>{name}</h3>
        <Box className="cart-product-quantity">
          <span>Quantity: </span>
          <span style={{ marginLeft: "5px", marginTop: "-3px" }}>{quantityHandler()}</span>
        </Box>

        <ul className="cart-product-content">
          {content?.length &&
            content.map((item, index) => (
              <li key={index}>
                <span style={{ fontSize: "14px" }}>
                  <b>{item.name}: </b>
                </span>
                <span style={{ color: "#A8AEB3" }}>{`(${item.type})`}</span>
              </li>
            ))}
        </ul>

        <Box className="edit-remove-pack-container">
          {/* buttons instead of h5 */}
          {content?.length ? (
            <Box className="edit-pack">
              <span> Edit pack </span>

              <Divider
                className="edit-remove-pack-divider"
                variant="middle"
                orientation="vertical"
                flexItem
              />

              <span className="remove-pack">Remove</span>
            </Box>
          ) : (
            <span className="remove-product">
              <DeleteForever /> Remove
            </span>
          )}
        </Box>
      </Box>

      <Box className="cart-product-value-container">
        <Box className="cart-product-value">
          <h3>{formattedPrice}</h3>
          <h3>Total: {formattedTotal}</h3>
        </Box>
      </Box>
    </Box>
  );
};
