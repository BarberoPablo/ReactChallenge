import React, { useReducer, createContext } from "react";
//This file could be modularized

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
  MODIFY_PRODUCT_PROPERTY = "MODIFY_PRODUCT_PROPERTY",
}

// An interface for our actions
export interface Action {
  type: ActionTypes;
  payload?: any; // How could I handle ADD, REMOVE and MODIFY without "any"? They dispatch different types
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
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const code = action.payload.code;
      if (code && !state.productsInCart.get(code)) {
        return {
          ...state,
          productsInCart: state.productsInCart.set(action.payload.code, action.payload),
        };
      }
    }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const code = action.payload;
      if (code) {
        const filteredProducts = state.productsInCart;
        filteredProducts.delete(code);
        return {
          ...state,
          productsInCart: filteredProducts,
        };
      }
    }
    case ActionTypes.MODIFY_PRODUCT_PROPERTY: {
      const code = action.payload?.code;
      const propertyKey = action.payload?.property[0];
      const propertyValue = action.payload?.property[1];

      if (code && propertyKey) {
        const newProducts = state.productsInCart;
        const oldProperties = state.productsInCart.get(code);
        if (oldProperties) {
          newProducts.set(code, { ...oldProperties, [propertyKey]: propertyValue });
          return {
            ...state,
            productsInCart: newProducts,
          };
        } else {
          return {
            ...state,
          };
        }
      }
    }

    default:
      throw new Error();
  }
}

//  DataContext will be consumed by the components inside DataProvider
export const DataContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

//  DataProvider will create the context so every component inside has access to the DataContext
export const DataProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};

/*  Some other ways to declare DataContext: (when we have more than 1 parameter state and dispatch)TS
const DataContext = React.createContext({} as { state: State; dispatch: React.Dispatch<Action> });

    If we only want to have access to dispatch and not the state, we can do:
  export const DataContext = React.createContext<React.Dispatch<Action> | undefined>(undefined);
*/
