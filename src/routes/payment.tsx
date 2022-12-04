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

import { Cart } from "~/models/product";
import { User } from "~/models/user";
import "./cart.scss";

export default function PaymentPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const [user, setUser] = createSignal<User>(JSON.parse("{}") as User);

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
        <GifkikkerButton>Continue to payment →</GifkikkerButton>
      </div>
    </main>
  );
}
