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
