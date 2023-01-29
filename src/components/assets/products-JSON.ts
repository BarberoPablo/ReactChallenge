export interface CartProductProps {
  name: string;
  quantity: number;
  content?: Array<{ name: string; type: string }>;
  price: number;
  image: string;
  index: number;
  update: Function;
}

export const products = [
  {
    name: "My christmas pack",
    quantity: 50,
    content: [
      { name: "Cardboard box", type: "container" },
      { name: "Unisex Short Sleeve T-Shirt", type: "Green, Small" },
      { name: "Basic bottle", type: "Blue" },
    ],

    price: 71.2,
    image: "https://iris-house.org/wp-content/uploads/2015/09/xmasbox_BIG.jpg",
  },
  {
    name: "Bascit T-Shirt",
    quantity: 10,
    price: 71.2,
    image: "https://www.tradeinn.com/f/13810/138100737/kruskis-camiseta-manga-corta-home.jpg",
  },
];

export interface RecommendedProducts {
  image: string;
  name: string;
  priceRange: string;
  minimum: number;
}

export const recommendedProducts = [
  {
    image: "",
    name: "Unidex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    image: "",
    name: "Unidex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    image: "",
    name: "Unidex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
  {
    image: "",
    name: "Unidex Short Sleeve T-Shirt",
    priceRange: "$10 - $24",
    minimum: 24,
  },
];
