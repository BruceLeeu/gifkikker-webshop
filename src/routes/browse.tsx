import { For } from "solid-js";
import { A } from "solid-start";
import { Card } from "~/components/Card";
import { PRODUCTS } from "~/const/products";
import "./browse.scss";

export default function Browse() {
  return (
    <div class="products">
      <p>hold my beer</p>
      <div class="products__container">
        <For each={Array.from(PRODUCTS.values())}>
          {(product) => (
            <A href={`/product/${product.productId}`}>
              <Card class="products__container__item">
                <img src={product.imageUrl} />
                <div>{product.description}</div>
              </Card>
            </A>
          )}
        </For>
      </div>
    </div>
  );
}
