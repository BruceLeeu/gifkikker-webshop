import { createSignal, For, onMount } from "solid-js";
import { useNavigate } from "solid-start";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { StyledTable } from "~/components/StyledTable";
import { Cart } from "~/models/product";
import "./cart.scss";

export default function CartPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const navigate = useNavigate();

  onMount(() => {
    setCurrentCart(JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart);
  });

  if (currentCart() !== undefined) {
    return (
      <main>
        <StyledTable>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Sell Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <For each={Object.entries(currentCart())}>
              {(cartItem) => (
                <tr
                  onClick={() =>
                    navigate(`/product/${cartItem[1].product.productId}`)
                  }
                >
                  <td>
                    <div>
                      <img src={cartItem[1].product.imageUrl} />
                    </div>
                    {/* <div>{cartItem[1]}</div> */}
                  </td>
                  <td>
                    <div>{cartItem[1].product.title}</div>
                  </td>
                  <td>
                    <div>€{cartItem[1].product.sellPrice}</div>
                  </td>
                  <td>
                    <div>{cartItem[1].amount}</div>
                  </td>
                  <td>
                    <div>
                      €{cartItem[1].product.sellPrice * cartItem[1].amount}
                    </div>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </StyledTable>
        <div class="button-container">
          <GifkikkerButton>Continue to shipping →</GifkikkerButton>
        </div>
      </main>
    );
  }

  return <div>whattest art thou?</div>;
}
