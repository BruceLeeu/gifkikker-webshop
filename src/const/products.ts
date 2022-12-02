import { Product } from "~/models/product";

export const PRODUCTS: Map<string, Product> = new Map([
  [
    "123-abc-hnk",
    {
      productId: "123-abc-hnk",
      title: "Heineken x6",
      description: "Six pack of Heineken beer",
      type: "sixpack",
      stock: 12,
      sellPrice: 15,
      makeup: [
        {
          partId: "abc-hnk",
          amount: 5,
          description: "Single bottle of Heineken",
          costPrice: 12.5,
          type: "beer-bottle",
          contains: {
            beverageId: "hnk",
            alcoholPercentage: 6.45,
            brand: "Heineken",
            type: "lager",
          },
          volume: 4.35, // centilitre
        },
      ],
      imageUrl: "https://ww1.valuecellars.com.au/files/2016/05/93497466-1.png",
    },
  ],
  [
    "456-def-clt",
    {
      productId: "456-def-clt",
      title: "Castle Lite x6",
      description: "Six pack of Castle Lite beer",
      type: "sixpack",
      stock: 6,
      sellPrice: 15 * 6,
      makeup: [
        {
          partId: "def-clt",
          amount: 5,
          description: "Single bottle of Castle Lite",
          costPrice: 12.5,
          type: "beer-bottle",
          contains: {
            beverageId: "clt",
            alcoholPercentage: 6.45,
            brand: "Heineken",
            type: "lager",
          },
          volume: 4.35, // centilitre
        },
      ],
      imageUrl:
        "https://rtjliquors.co.za/wp-content/uploads/2020/05/CASTLELITE_1.png",
    },
  ],
]);

export const BEVERAGE_TYPES = new Map([
  ["lager", "Lager"],
  ["herfstbok", "Herfstbok (Fall Season Beer)"],
  ["lentebok", "Lentebok (Spring Season Beer)"],
  ["ipa", "IPA (India Pale Ale)"],
]);
