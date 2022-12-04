import { EXISTING_USERS } from "~/const/products";
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
