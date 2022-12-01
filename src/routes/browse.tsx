import { For } from "solid-js";
import { A } from "solid-start";
import { PRODUCTS } from "~/const/products";

export default function Browse() {
  return (
    <div>
      <p>hold my beer</p>
      <For each={Array.from(PRODUCTS.values())}>
        {(bev) => (
          <A href={`/product/${bev.productId}`}>
            <div>{bev.type}</div>
          </A>
        )}
      </For>
    </div>
  );
}
