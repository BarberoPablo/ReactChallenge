import React, { useMemo, useContext } from "react";
import { Box, Divider, NativeSelect } from "@mui/material";
import { DeleteForever } from "@mui/icons-material/";
import "./CartProduct.css";
import { CartProductProps } from "../assets/types";
import { parseNumber } from "../assets/utils";

import { ActionTypes, DataContext } from "../../context/DataContext";

export const CartProduct: React.FC<CartProductProps> = ({
  name,
  quantity,
  content,
  price,
  image,
  stock,
  code,
}) => {
  const { state, dispatch } = useContext(DataContext);
  const total = parseNumber(state.productsInCart.get(code)?.quantity! * price);

  const handleNewQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ActionTypes.MODIFY_PRODUCT_PROPERTY,
      payload: { code, property: ["quantity", e.target.value] },
    });
  };

  //  useMemo() avoids mapping the Array in every re-render as long as the stock of the Product doesn't change
  const maxQuantity = useMemo(() => {
    const display = [...Array(stock)].map((item, index) => {
      console.log("re render");
      return (
        <option key={index + "quantity"} value={index + 1}>
          {index + 1}
        </option>
      );
    });
    return display;
  }, [state.productsInCart.get(code)?.stock]);

  const quantityHandler = () => {
    return (
      <Box>
        <NativeSelect defaultValue={quantity} onChange={handleNewQuantity}>
          {quantity > 0 && maxQuantity}
        </NativeSelect>
      </Box>
    );
  };

  const handleRemove = () => {
    dispatch({ type: ActionTypes.REMOVE_PRODUCT_FROM_CART, payload: code });
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
          {content?.length ? (
            <Box className="edit-pack">
              <span> Edit pack </span>

              <Divider
                className="edit-remove-pack-divider"
                variant="middle"
                orientation="vertical"
                flexItem
              />

              <span className="remove-pack" onClick={handleRemove}>
                Remove
              </span>
            </Box>
          ) : (
            <span className="remove-product" onClick={handleRemove}>
              <DeleteForever /> Remove
            </span>
          )}
        </Box>
      </Box>

      <Box className="cart-product-value-container">
        <Box className="cart-product-value">
          <h3>{parseNumber(price)}</h3>
          <h3>Total: {total}</h3>
        </Box>
      </Box>
    </Box>
  );
};
