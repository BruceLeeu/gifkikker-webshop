import { For, Show } from "solid-js";
import { A, createRouteData, useRouteData } from "solid-start";
import { fetchProducts } from "~/api/api";
import { Card } from "~/components/Card";
import { Spinner } from "~/components/Spinner";
import "./browse.scss";

export function routeData() {
  return createRouteData(async () => {
    const response = await fetchProducts();
    return response;
  });
}

export default function Browse() {
  const products = useRouteData<typeof routeData>();

  return (
    <div class="products">
      <div class="products__container">
        <Show when={products?.loading}>
          <Spinner />
        </Show>
        <For each={products()} fallback={<div>nothing to see</div>}>
          {(product) => (
            <A href={`/product/${product.productId}`}>
              <Card class="products__container__item">
                <img src={product.imageUrl} />
                <div>{product.title}</div>
              </Card>
            </A>
          )}
        </For>
      </div>
    </div>
  );
}
