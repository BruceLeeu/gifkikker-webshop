import { useNavigate } from "@solidjs/router";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  onMount,
  Show,
} from "solid-js";
import { useLocation } from "solid-start";
import { fetchUser } from "~/api/api";
import { Card } from "~/components/Card";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";

import { Cart } from "~/models/product";
import { User } from "~/models/user";
import "./cart.scss";

export default function OrderPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const [user, setUser] = createSignal<User>(JSON.parse("{}") as User);
  const navigate = useNavigate();
  onMount(() => {
    setCurrentCart(JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart);
    setUser(JSON.parse(localStorage.getItem("user") ?? "{}") as User);
  });

  return (
    <main>
      YOur order here {user()?.email}
      <div>
        <Show when={user()?.email !== undefined} fallback={<div>loading</div>}>
          <span>
            {`Shipping to: ${user()?.address?.street}, 
                  ${user()?.address?.city}, 
                  ${user()?.address?.province}, 
                  ${user()?.address?.country}, 
                  ${user()?.address?.postalCode}`}
          </span>
          <div>
            <fieldset>
              <GifkikkerInput
                type="radio"
                value="Pickup"
                name="address"
                placeholder="Pickup"
              />
              <GifkikkerInput
                type="radio"
                value="Home Delivery"
                name="address"
                placeholder="Home Delivery"
              />
            </fieldset>
          </div>
        </Show>
      </div>
      <Card>
        <div>
          <For
            each={Object.entries(currentCart())}
            fallback={<div>loading</div>}
          >
            {(cartItem) => <div>{cartItem[1].product.title}</div>}
          </For>
        </div>
      </Card>
      <div class="button-container">
        <GifkikkerButton
          onClick={() => {
            navigate(`/payment`);
          }}
        >
          Continue to payment →
        </GifkikkerButton>
      </div>
    </main>
  );
}
