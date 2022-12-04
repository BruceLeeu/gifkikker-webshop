import { useNavigate } from "@solidjs/router";
import { createSignal, For, Show } from "solid-js";
import {
  createRouteData,
  RouteDataArgs,
  useParams,
  useRouteData,
} from "solid-start";
import { fetchProductDetail } from "~/api/api";
import { Card } from "~/components/Card";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";
import { Spinner } from "~/components/Spinner";
import { Cart, CartItem } from "~/models/order";
import { Product } from "~/models/product";
import "./product.scss";

export function routeData({ params }: RouteDataArgs) {
  return createRouteData(
    async () => {
      const response = await fetchProductDetail(params.productId);
      return response;
    },
    {
      key: () => [params.productId],
    }
  );
}

function ProductInfo() {
  const params = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const currentProduct = useRouteData<typeof routeData>();
  const [orderAmount, setProductAmount] = createSignal(0);

  return (
    <div class="product-detail-base" id="product-content">
      <Show
        when={currentProduct() !== undefined && !currentProduct?.loading}
        fallback={<Spinner />}
      >
        {currentProduct?.error ? (
          <div>not found</div>
        ) : (
          <>
            <Card class="product-detail-base__image-wrapper">
              <div class="product-detail-base__image">
                <img src={currentProduct()?.imageUrl} />
              </div>
            </Card>
            <div class="product-detail-base__actions">
              <Card class="product-info">
                <span class="title">{currentProduct()?.title}</span>
                <p>{currentProduct()?.description}</p>
                <label>
                  {(currentProduct()?.stock ?? 0) - orderAmount()} in stock
                </label>
                <label>Includes:</label>
                <For
                  each={currentProduct()?.makeup}
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
                  <a id="price">{currentProduct()?.sellPrice ?? 0}</a>
                </span>
              </Card>
              <Card class="order-card">
                <GifkikkerInput
                  type="number"
                  id="amount"
                  placeholder="amount of items"
                  value={orderAmount()}
                  min="0"
                  onChange={(v) => {
                    setProductAmount(v.currentTarget.valueAsNumber);
                  }}
                  max={currentProduct()?.stock}
                />
                <span class="total">
                  <a>Total: €</a>
                  <a id="total">
                    {(currentProduct()?.sellPrice ?? 0) * orderAmount()}
                  </a>
                </span>
                <GifkikkerButton
                  disabled={orderAmount() === 0}
                  onClick={() => {
                    addToCart(params.productId, {
                      amount: orderAmount(),
                      product: currentProduct() as Product,
                    });
                    navigate(`/cart`);
                  }}
                >
                  ORDER {orderAmount()} NOW!
                </GifkikkerButton>
              </Card>
            </div>
          </>
        )}
      </Show>
    </div>
  );
}

const addToCart = (productId: string, cartItem: CartItem) => {
  const currentCart = JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart;
  const cart: Cart = { ...currentCart, [productId]: cartItem };
  localStorage.setItem("cart", JSON.stringify(cart));
};

export default ProductInfo;
