import longShirt from "../assets/long-shirt.png";
import shirt from "../assets/shirt.png";
import backpack from "../assets/backpack.png";
import christmas from "../assets/christmas.png";

export const products = [
  {
    name: "My christmas pack",
    content: [
      { name: "Cardboard box", type: "container" },
      { name: "Unisex Short Sleeve T-Shirt", type: "Green, Small" },
      { name: "Basic bottle", type: "Blue" },
    ],

    price: 309.99,
    image: christmas,
    code: "p001",
    stock: 5,
  },
  {
    name: "Bascit T-Shirt",
    price: 14.99,
    image: shirt,
    code: "s001",
    stock: 19,
  },
  {
    name: "School Backpack",
    price: 99.9,
    image: backpack,
    code: "b001",
    stock: 3,
  },
];

export const productsCodes = ["p001", "s001", "b001", "s003"];

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
