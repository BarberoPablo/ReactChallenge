import React, { useState } from "react";
import { Box, Divider, Grid, NativeSelect } from "@mui/material";
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
        {content?.length && <h4>PACK</h4>}
      </Box>

      <Box className="cart-product-info">
        <h3>{name}</h3>
        <h4>Quantity: {quantityHandler()}</h4>
        <ul>
          {content?.length &&
            content.map((item, index) => (
              <li key={index}>
                {item.name}: {item.type}
              </li>
            ))}
          <Grid container alignItems="center" className="edit-remove-pack">
            {/* buttons instead of h5 */}
            <h5> Edit pack</h5> <Divider variant="middle" orientation="vertical" flexItem />{" "}
            <h5> Remove</h5>
          </Grid>
        </ul>
      </Box>

      <Box>
        <h3>${price}</h3>
        <h3>Total: ${(newQuantity * price).toFixed(2)}</h3>
      </Box>
    </Box>
  );
};
