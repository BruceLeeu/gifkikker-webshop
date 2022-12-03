import { createSignal, For, onMount } from "solid-js";
import { Portal } from "solid-js/web";
import { useNavigate } from "solid-start";
import { Card } from "~/components/Card";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";
import { Modal } from "~/components/Modal";
import { StyledTable } from "~/components/StyledTable";
import { Cart } from "~/models/product";
import { getCalculatedCartTotal } from "~/utils/calculations";
import "./cart.scss";

export default function RegisterPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const [email, setEmail] = createSignal<string>();

  const navigate = useNavigate();
  const [showModal, toggleModal] = createSignal(false);

  onMount(() => {
    setCurrentCart(JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart);
  });

  return (
    <main>
      <h1>Register your user here</h1>
      <GifkikkerInput
        placeholder="email"
        onInput={(e) => setEmail(e.currentTarget.value)}
      />
      <GifkikkerInput placeholder="name" />
      <GifkikkerInput placeholder="address" />
      <GifkikkerButton
        onClick={() => {
          navigate(`/order?email=${email()}`);
        }}
      >
        Register
      </GifkikkerButton>
    </main>
  );
}
