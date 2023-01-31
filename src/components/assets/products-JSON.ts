import longShirt from "../assets/long-shirt.png";
import shirt from "../assets/shirt.png";
import christmas from "../assets/christmas.png";
export interface navbarInterface {
  totalProducts: number;
}
export interface cartInterface {
  updateCart: Function;
}
export interface CartProductProps {
  name: string;
  quantity: number;
  content?: Array<{ name: string; type: string }>;
  price: number;
  image: string;
  index: number;
  update: Function;
  stock: number;
  code: string;
  getCartProducts: Function;
}

export interface ProductLayout {
  name: string;
  quantity: number;
  content: Array<any>;
  price: number;
  image: string;
  stock: number;
  code: string;
}

export const products = [
  {
    name: "My christmas pack",
    /* quantity: 50, */
    content: [
      { name: "Cardboard box", type: "container" },
      { name: "Unisex Short Sleeve T-Shirt", type: "Green, Small" },
      { name: "Basic bottle", type: "Blue" },
    ],

    price: 71.2,
    image: christmas,
    code: "p001",
    stock: 5,
  },
  {
    name: "Bascit T-Shirt",
    /* quantity: 10, */
    price: 71.2,
    image: shirt,
    code: "s001",
    stock: 19,
  },
];

export const codes = ["p001", "s001", "s002", "s003"];

export interface RecommendedProducts {
  image: string;
  name: string;
  priceRange: string;
  minimum: number;
}

export const recommendedProducts = [
  {
    image: longShirt,
    name: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    image: longShirt,
    name: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    image: longShirt,
    name: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    image: longShirt,
    name: "Unisex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
];

export interface HomeProductLayout {
  image: string;
  price: number;
  name: string;
  code: string;
  content?: Array<{ name: string; type: string }>;
  setCartProducts: Function;
  stock: number;
}
