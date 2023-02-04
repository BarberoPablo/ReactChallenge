import React from "react";

// An enum with all the types of actions to use in our reducer
export interface Product {
  name: string;
  quantity: number;
  content?: Array<{ name: string; type: string }>;
  price: number;
  image: string;
  stock: number;
  code: string;
}

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
  GET_PRODUCTS_FROM_CART = "GET_PRODUCTS_FROM_CART",
}

// An interface for our actions
export interface Action {
  type: ActionTypes;
  payload?: Product;
}

// An interface for our state, a Map instead of an array so its faster to find duplicates
export interface State {
  productsInCart: Map<string, Product>;
}

export const initialState: State = {
  productsInCart: new Map(),
};

/*  State example:
("b001", {name: "School Backpack", price: 99.9, image: backpack, code: "b001", stock: 3});
("s001", {name: "Bascit T-Shirt", price: 14.99,image: shirt, code: "s001", stock: 19});
("p001", {
  name: "My christmas pack", 
  content: [
    { name: "Cardboard box", type: "container" },
    { name: "Unisex Short Sleeve T-Shirt", type: "Green, Small" },
    { name: "Basic bottle", type: "Blue" },
  ],
  price: 309.99,
  image: christmas,
  code: "p001",
  stock: 5);
}
*/

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      if (action.payload?.code) {
        return {
          ...state,
          productsInCart: state.productsInCart.set(action.payload.code, action.payload),
        };
      }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      if (action.payload?.code) {
        const filteredProducts = state.productsInCart;
        filteredProducts.delete(action.payload.code);
        return {
          ...state,
          productsInCart: filteredProducts,
        };
      }
    case ActionTypes.GET_PRODUCTS_FROM_CART:
      console.log("State:", state);
      return state;
    default:
      throw new Error();
  }
}

export const DispatchContext = React.createContext<React.Dispatch<Action> | undefined>(undefined);
