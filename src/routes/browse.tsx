import { For } from "solid-js";
import { PRODUCTS } from "~/const/products";

export default function Browse() {
  return (
    <div>
      <p>hold my beer</p>
      <For each={Array.from(PRODUCTS.values())}>
        {(bev) => <div>{bev.type}</div>}
      </For>
    </div>
  );
}
