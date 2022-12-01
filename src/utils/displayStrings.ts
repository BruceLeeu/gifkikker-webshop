import { BEVERAGE_TYPES } from "~/const/products";
import { BeverageType } from "~/models/beverage";

export function beverageTypeToString(type: BeverageType) {
  return BEVERAGE_TYPES.get(type);
}
