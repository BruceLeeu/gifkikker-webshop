import { EXISTING_USERS, PRODUCTS } from "~/const/products";
import { Product } from "~/models/product";
import { User } from "~/models/user";

export const fetchUser = async (id: string) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      const found = EXISTING_USERS.get(id);
      if (found !== undefined) {
        resolve(found);
      } else {
        reject("user does not exist");
      }
    }, 1234);
  });
};

export const fetchProducts = async () => {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      const found = PRODUCTS.values();
      if (found !== undefined) {
        resolve(Array.from(found));
      } else {
        reject("no products found");
      }
    }, 0);
  });
};

export const fetchProductDetail = async (id: string) => {
  return new Promise<Product>((resolve, reject) => {
    setTimeout(async () => {
      const found = PRODUCTS.get(id);
      if (found !== undefined) {
        return resolve(found);
      } else {
        return reject("product does not exist");
      }
    }, 0);
  });
};
