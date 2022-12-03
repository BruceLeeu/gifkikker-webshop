import { createSignal, onMount } from "solid-js";
import { useLocation } from "solid-start";
import { GifkikkerButton } from "~/components/GifkikkerButton";

import { Cart } from "~/models/product";
import "./cart.scss";

export default function OrderPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  // const navigate = useNavigate();
  const location = useLocation();
  console.log(location.search);

  const email = location.search.split("?email=")[1];
  console.log(email);

  onMount(() => {
    setCurrentCart(JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart);
  });

  if (currentCart() !== undefined) {
    return (
      <main>
        YOur order here {email}
        <div class="button-container">
          <GifkikkerButton>Continue to shipping →</GifkikkerButton>
        </div>
      </main>
    );
  }

  return <div>whattest art thou?</div>;
}
