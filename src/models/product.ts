import { Beverage } from "./beverage";

export interface Product {
  productId: string;
  title: string;
  description: string;
  type: ProductType | PartType;
  stock: number;
  sellPrice: number;
  makeup: Part[];
  imageUrl: string;
}

export interface Part {
  partId: string;
  amount: number;
  description: string;
  costPrice: number;
  type: PartType;
  contains?: Beverage;
  volume?: number; // centilitre
}

type PartType =
  | "keg"
  | "beer-bottle"
  | "box"
  | "glass"
  | "crate"
  | "champagne-bottle"
  | "coaster";

type ProductType = "gift" | "crate" | "sixpack" | "glass";
