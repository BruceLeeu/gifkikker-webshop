import { Beverage } from "~/models/beverage";

export const PRODUCTS: Map<string, Beverage> = new Map([
  [
    "123-abc",
    {
      productId: "123-abc",
      volume: 123,
      alcoholPercentage: 50,
      brand: "lager",
      type: "Heineken",
      imageUrl: "https://ww1.valuecellars.com.au/files/2016/05/93497466-1.png",
    },
  ],
]);

export const BEVERAGE_TYPES = new Map([
  ["lager", "Lager"],
  ["herfstbok", "Herfstbok (Fall Season Beer)"],
  ["lentebok", "Lentebok (Spring Season Beer)"],
  ["ipa", "IPA (India Pale Ale)"],
]);
