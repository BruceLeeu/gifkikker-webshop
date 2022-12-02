import { createSignal, For, Show } from "solid-js";
import { useParams } from "solid-start";
import { Card } from "~/components/Card";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";
import { PRODUCTS } from "~/const/products";
import { Cart, CartItem, Product } from "~/models/product";
import "./product.scss";

export default function ProductInfo() {
  const params: { productId: string } = useParams();
  const productId: string = params.productId;
  const currentProduct = PRODUCTS.get(productId);

  const [orderAmount, setProductAmount] = createSignal(0);

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
              {(currentProduct?.stock ?? 0) - orderAmount()} in stock
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
              <a>Product Price: €</a>
              <a id="price">{currentProduct?.sellPrice ?? 0}</a>
            </span>
          </Card>
          <Card>
            <GifkikkerInput
              type="number"
              id="amount"
              placeholder="amount of items"
              value={orderAmount()}
              min="0"
              onChange={(v) => {
                setProductAmount(v.currentTarget.valueAsNumber);
              }}
              max={currentProduct?.stock}
            />
            <span class="error-msg" id="error-msg"></span>
            <span class="total">
              <a>Total: R</a>
              <a id="total">
                {(currentProduct?.sellPrice ?? 0) * orderAmount()}
              </a>
            </span>
            <GifkikkerButton
              disabled={orderAmount() === 0}
              onClick={() =>
                addToCart(productId, {
                  amount: orderAmount(),
                  product: currentProduct as Product,
                })
              }
            >
              ORDER {orderAmount()} NOW!
            </GifkikkerButton>
          </Card>
        </div>
      </Show>
    </div>
  );
}

function addToCart(productId: string, cartItem: CartItem) {
  const currentCart = JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart;
  const cart: Cart = { ...currentCart, [productId]: cartItem };
  localStorage.setItem("cart", JSON.stringify(cart));
}
