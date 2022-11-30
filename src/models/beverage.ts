export interface Beverage {
  productId: string;
  volume: number; // centilitre
  alcoholPercentage: number;
  brand: BeverageType;
  type: BeverageBrand;
  imageUrl: string;
}

type BeverageType = "herfstbok" | "lentebok" | "ipa" | "lager";
type BeverageBrand = "Gifkikker" | "Heineken" | "Grolsch" | "Castle Lite";
// type ProductType = "keg" | "sixpack" | "gift" | "glass" | "crate" | "champagne"
