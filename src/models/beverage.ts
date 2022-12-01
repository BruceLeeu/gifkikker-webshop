export interface Beverage {
  beverageId: string;
  alcoholPercentage: number;
  brand: BeverageBrand;
  type: BeverageType;
}

export type BeverageType = "herfstbok" | "lentebok" | "ipa" | "lager";
type BeverageBrand = "Gifkikker" | "Heineken" | "Grolsch" | "Castle Lite";
