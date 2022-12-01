import { Show } from "solid-js";
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
            <span class="title">{currentProduct?.brand}</span>
            <p class="text">{currentProduct?.type}</p>
            <span class="price">
              <a>Cake Price: €</a>
              <a id="price">000</a>
            </span>
          </Card>
          <Card>
            <GifkikkerInput
              type="number"
              id="amount"
              placeholder="amount of cakes"
              value="1"
              min="1"
              max="10"
            />
            <span class="error-msg" id="error-msg"></span>
            <span class="total">
              <a>Total: R</a>
              <a id="total">--</a>
            </span>
            <GifkikkerButton>ORDER NOW!</GifkikkerButton>
          </Card>
        </div>
      </Show>
    </div>
  );
}
