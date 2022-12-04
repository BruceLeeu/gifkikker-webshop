import { EXISTING_USERS, PRODUCTS } from "~/const/products";
import { Product } from "~/models/product";
import { User } from "~/models/user";

export const fetchUser = async (id: string) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      const found = EXISTING_USERS.get(id);
      if (found !== undefined) {
        console.log("found user");
        resolve(found);
      } else {
        console.log("NOT found user");
        reject("{ n }");
      }
    }, 1234);
  });
};

export const fetchProducts = async () => {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      const found = PRODUCTS.values();
      if (found !== undefined) {
        console.log("found user");
        resolve(Array.from(found));
      } else {
        console.log("NOT found user");
        reject("{ n }");
      }
    }, 0);
  });
};

export const fetchProductDetail = async (id: string) => {
  return new Promise<Product>((resolve, reject) => {
    console.log("fetching detail");
    setTimeout(async () => {
      const found = PRODUCTS.get(id);
      if (found !== undefined) {
        console.log("found user");
        return resolve(found);
      } else {
        console.log("NOT found product", id);
        return reject("{ n }");
      }
    }, 0);
  });
};
