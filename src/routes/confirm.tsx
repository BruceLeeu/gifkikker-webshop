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

import { Cart } from "~/models/order";
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
      YOur order here has been confirmed. We'll get back to you via email as
      soon at your order is processed.
    </main>
  );
}
