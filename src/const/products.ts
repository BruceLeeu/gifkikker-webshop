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
          amount: 6,
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
          amount: 6,
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
  [
    "648-had-agg",
    {
      productId: "648-had-agg",
      title: "Keg of Grolsch",
      description: "A metal keg containing Grolsch",
      type: "keg",
      stock: 16,
      sellPrice: 155,
      makeup: [
        {
          partId: "had-agg",
          amount: 5,
          description: "Single keg of Grolsch",
          costPrice: 125,
          type: "keg",
          contains: {
            beverageId: "agg",
            alcoholPercentage: 6.45,
            brand: "Grolsch",
            type: "draft",
          },
          volume: 60.0, // centilitre
        },
      ],
      imageUrl: "https://media.hopt.eu/img/p/2075-2214-v4_product_img.jpg",
    },
  ],
  [
    "777-aaa-pop",
    {
      productId: "777-aaa-pop",
      title: "Stella Artois gift pack",
      description:
        "Wonderfully packaged Stella Artois Gift set containing a glass, coasters, and of course our crafted beer",
      type: "gift",
      stock: 2,
      sellPrice: 500,
      makeup: [
        {
          partId: "aaa-pop",
          amount: 12,
          description: "Single bottle of Stella Artois",
          costPrice: 300,
          type: "beer-bottle",
          contains: {
            beverageId: "pop",
            alcoholPercentage: 9.7,
            brand: "Stella Artois",
            type: "lager",
          },
          volume: 4.35, // centilitre
        },
        {
          partId: "aaa-pip",
          amount: 1,
          description: "Single Stella Artois collectors glass",
          costPrice: 100,
          type: "glass",
          // contains: undefined,
          volume: 8.35, // centilitre
        },
        {
          partId: "aaa-pep",
          amount: 1,
          description: "Single Stella Artois collectors coaster",
          costPrice: 50,
          type: "coaster",
          // contains: undefined,
          // volume: 4.35, // centilitre
        },
        {
          partId: "aaa-pep",
          amount: 1,
          description: "Single Stella Artois collectors box",
          costPrice: 50,
          type: "box",
          // contains: undefined,
          // volume: 50, // centilitre
        },
      ],
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0370/6497/products/Stella_Artois_Gift_Pack_3aa3151b-0942-42c8-a9c2-cbceb214a759.jpg?v=1555961406",
    },
  ],
  [
    "111-iii-lll",
    {
      productId: "111-iii-lll",
      title: "Stella Artois Collectors glass",
      description: "Single Stella Artois collectors glass",
      type: "glass",
      stock: 60,
      sellPrice: 120,
      makeup: [
        {
          partId: "aaa-pip",
          amount: 1,
          description: "Single Stella Artois collectors glass",
          costPrice: 100,
          type: "glass",
          // contains: undefined,
          volume: 8.35, // centilitre
        },
      ],
      imageUrl: "https://barshopen.com/images/zoom/img_7617.jpg",
    },
  ],
  [
    "ooo-000-qqq",
    {
      productId: "ooo-000-qqq",
      title: "Gifkikker x6",
      description: "Six pack of Gifkikker beer",
      type: "sixpack",
      stock: 6,
      sellPrice: 20,
      makeup: [
        {
          partId: "000-qqq",
          amount: 6,
          description: "Single bottle of Gifkikker",
          costPrice: 12.5,
          type: "beer-bottle",
          contains: {
            beverageId: "qqq",
            alcoholPercentage: 2.2,
            brand: "Gifkikker",
            type: "herfstbok",
          },
          volume: 4.35, // centilitre
        },
      ],
      imageUrl:
        "https://assets.untappd.com/photos/2022_09_11/8f757849730744e3e3001ab711919e3a_640x640.jpg",
    },
  ],
  [
    "non-546-ton",
    {
      productId: "non-546-ton",
      title: "A crate of Crate",
      description: "20 pack crate of Crate IPA",
      type: "sixpack",
      stock: 6,
      sellPrice: 90,
      makeup: [
        {
          partId: "546-ton",
          amount: 20,
          description: "Single bottle of Crate IPA",
          costPrice: 12.5,
          type: "beer-bottle",
          contains: {
            beverageId: "ton",
            alcoholPercentage: 11.9,
            brand: "Crate",
            type: "lager",
          },
          volume: 4.35, // centilitre
        },
      ],
      imageUrl:
        "https://d25cmwjnw6afa4.cloudfront.net/media/catalogue/product/modified/crate_ipabottle_20pack.jpg",
    },
  ],
  [
    "lln-999-heh",
    {
      productId: "lln-999-heh",
      title: "Bottle of J.C. le Roux non-alcoholic champagne",
      description: "Single classy bottle of sparkling wine (champagne)",
      type: "champagne-bottle",
      stock: 6,
      sellPrice: 90,
      makeup: [
        {
          partId: "999-heh",
          amount: 1,
          description: "Bottle of classy champagne",
          costPrice: 12.5,
          type: "champagne-bottle",
          contains: {
            beverageId: "heh",
            alcoholPercentage: 0,
            brand: "J.C. le Roux",
            type: "champagne",
          },
          volume: 4.35, // centilitre
        },
      ],
      imageUrl:
        "https://www.woodstockliquors.co.za/wp-content/uploads/2020/03/SKU10959-1.jpg",
    },
  ],
]);

export const BEVERAGE_TYPES = new Map([
  ["lager", "Lager"],
  ["herfstbok", "Herfstbok (Fall Season Beer)"],
  ["lentebok", "Lentebok (Spring Season Beer)"],
  ["ipa", "IPA (India Pale Ale)"],
]);

export const EXISTING_USERS = new Map([
  [
    "louis@louislagrange.co.za",
    {
      address: {
        city: "Cape Town",
        country: "South Africa",
        postalCode: "7580",
        province: "Western Cape",
        street: "10 Waboom Avenue",
      },
      email: "louis@louislagrange.co.za",
      name: "Louis",
    },
  ],
]);
