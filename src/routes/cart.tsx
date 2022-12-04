import {
  createEffect,
  createResource,
  createSignal,
  For,
  onMount,
  Show,
} from "solid-js";
import { useNavigate } from "solid-start";
import { Card } from "~/components/Card";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";
import { Modal } from "~/components/Modal";
import { Spinner } from "~/components/Spinner";
import { StyledTable } from "~/components/StyledTable";
import { Cart } from "~/models/order";
import { getCalculatedCartTotal } from "~/utils/calculations";
import { debounce } from "@solid-primitives/scheduled";
import "./cart.scss";
import { fetchUser } from "~/api/api";

export default function CartPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const navigate = useNavigate();
  const [showModal, toggleModal] = createSignal(false);
  const [existingCustomer, setExistingCustomer] = createSignal(false);

  onMount(() => {
    setCurrentCart(JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart);
  });

  const [userEmail, setUserEmail] = createSignal<string>();
  const [user] = createResource(userEmail, fetchUser);

  const trigger = debounce(
    (
      e: InputEvent & {
        currentTarget: HTMLInputElement;
        target: Element;
      }
    ) => {
      // Because selection returns a HTMLInputElement
      setUserEmail((e.target as HTMLInputElement).value);
    },
    500
  );

  createEffect(() => {
    console.log(user);
    console.log(userEmail());
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
            <For
              each={Object.entries(currentCart())}
              /* fallback={<div>loading</div>} */
            >
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
        <span>
          <label>Total Items: </label>
          {getCalculatedCartTotal(currentCart())[0]}
        </span>
        <span>
          <label>Total Cost: </label>€{getCalculatedCartTotal(currentCart())[1]}
        </span>
        <div class="button-container">
          <GifkikkerButton onClick={() => toggleModal((b) => !b)}>
            Continue to shipping →
          </GifkikkerButton>
        </div>
        {showModal() ? (
          <Modal onClick={() => toggleModal((b) => !b)}>
            <Card class="cart-modal">
              Areyou an existing customer?
              <GifkikkerButton onClick={() => navigate(`/register`)}>
                New customer
              </GifkikkerButton>
              <GifkikkerButton
                onClick={() => {
                  if (existingCustomer()) {
                    localStorage.setItem("user", JSON.stringify(user.latest));
                    navigate(`/order`);
                  } else {
                    setExistingCustomer(true);
                  }
                }}
                disabled={
                  user?.error ||
                  user?.loading ||
                  (user() === undefined && existingCustomer())
                }
              >
                {existingCustomer()
                  ? `Confirm existing customer`
                  : `Existing customer`}
              </GifkikkerButton>
              <Show when={existingCustomer()}>
                <GifkikkerInput
                  onInput={trigger}
                  placeholder={`email address`}
                />
                <Show when={user && !user.loading} fallback={<Spinner />}>
                  {user.error ? (
                    <span>{user.error}</span>
                  ) : (
                    <span>
                      {user() !== undefined && `Welcome, ${user.latest?.name}!`}
                    </span>
                  )}
                </Show>
              </Show>
            </Card>
          </Modal>
        ) : (
          <></>
        )}
      </main>
    );
  }

  return <div>whattest art thou?</div>;
}
