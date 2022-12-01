import { createEffect, createSignal, For, Show } from "solid-js";
import { useParams } from "solid-start";
import { Card } from "~/components/Card";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";
import { PRODUCTS } from "~/const/products";
import "./product.scss";

export default function Product() {
  const params: { productId: string } = useParams();
  const productId: string = params.productId;
  const currentProduct = PRODUCTS.get(productId);
  // const currentProductMakeup = currentProduct?.makeup;

  const [orderAmount, setProductAmount] = createSignal(0);
  createEffect(() => {
    console.log(orderAmount());
    console.log(orderAmount() === 0);
  });

  return (
    <div class="product-detail-base" id="product-content">
      <Show
        when={currentProduct}
        fallback={<div>no product with id {productId} found</div>}
      >
        <Card class="product-detail-base__image-wrapper">
          <div class="product-detail-base__image">
            <img src={currentProduct?.imageUrl} />
          </div>
        </Card>
        <div class="product-detail-base__actions">
          <Card>
            <span class="title">{currentProduct?.title}</span>
            <p class="text">{currentProduct?.description}</p>
            <p class="text">
              {currentProduct?.stock ?? 0 /*  - orderAmount() */} in stock
            </p>
            <p class="text">Includes:</p>
            <For
              each={currentProduct?.makeup}
              fallback={<div>...nothing here...</div>}
            >
              {(item) => (
                <div>
                  <div>
                    {item.amount} {item.type}
                  </div>
                  <div>{item.volume} cl each</div>
                  <div>€{item.costPrice} per item (cost)</div>
                </div>
              )}
            </For>
            <span class="price">
              <a>Final Price: €</a>
              <a id="price">
                {currentProduct?.sellPrice ?? 0 /*  * orderAmount() */}
              </a>
            </span>
          </Card>
          <Card>
            <GifkikkerInput
              type="number"
              id="amount"
              placeholder="amount of items"
              value={orderAmount()}
              min="0"
              disabled={orderAmount() === 3}
              onChange={(v) => {
                setProductAmount(v.currentTarget.valueAsNumber);
              }}
              max={currentProduct?.stock}
            />
            <span class="error-msg" id="error-msg"></span>
            <span class="total">
              <a>Total: R</a>
              <a id="total">{orderAmount()}</a>
            </span>
            <GifkikkerButton disabled={orderAmount() === 0}>
              ORDER {orderAmount()} NOW!
            </GifkikkerButton>
          </Card>
        </div>
      </Show>
    </div>
  );
}
