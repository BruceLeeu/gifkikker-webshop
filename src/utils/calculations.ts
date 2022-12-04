import { createSignal } from "solid-js";
import { Cart } from "~/models/order";

export function getCalculatedCartTotal(cart: Cart) {
  const [totalItems, setTotalItems] = createSignal(0);
  const [totalCost, setTotalCost] = createSignal(0);

  if (cart) {
    for (const cartItem of Object.values(cart)) {
      const itemTotal = cartItem.amount * cartItem.product.sellPrice;
      setTotalCost((tc) => tc + itemTotal);
      setTotalItems((ti) => ti + 1);
    }
  }
  return [totalItems(), totalCost()];
}
