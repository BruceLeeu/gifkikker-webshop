export interface Beverage {
  beverageId: string;
  alcoholPercentage: number;
  brand: BeverageBrand;
  type: BeverageType;
}

export type BeverageType =
  | "herfstbok"
  | "lentebok"
  | "ipa"
  | "lager"
  | "draft"
  | "champagne";
type BeverageBrand =
  | "Gifkikker"
  | "Heineken"
  | "Grolsch"
  | "Castle Lite"
  | "Stella Artois"
  | "Crate"
  | "J.C. le Roux";
