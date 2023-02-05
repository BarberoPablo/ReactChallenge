export interface RecommendedProducts {
  image: string;
  name: string;
  priceRange: string;
  minimum: number;
}

export interface HomeProductLayout {
  image: string;
  price: number;
  name: string;
  code: string;
  content?: Array<{ name: string; type: string }>;
  stock: number;
}

export interface CartProductProps {
  name: string;
  quantity: number;
  content?: Array<{ name: string; type: string }>;
  price: number;
  image: string;
  stock: number;
  code: string;
}
