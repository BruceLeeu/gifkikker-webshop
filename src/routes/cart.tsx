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
import { EXISTING_USERS } from "~/const/products";
import { Cart } from "~/models/product";
import { getCalculatedCartTotal } from "~/utils/calculations";
import { debounce } from "@solid-primitives/scheduled";
import "./cart.scss";

const fetchUser = async (id: string) => {
  return new Promise<{ name: string }>((resolve, reject) => {
    setTimeout(() => {
      const found = EXISTING_USERS.get(id);
      if (found !== undefined) {
        resolve(found);
      } else {
        reject("{ n }");
      }
    }, 1234);
  });
};

export default function CartPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const navigate = useNavigate();
  const [showModal, toggleModal] = createSignal(false);

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setUserEmail(e.target.value);
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
        <span>{getCalculatedCartTotal(currentCart())[0]}</span>
        <span>{getCalculatedCartTotal(currentCart())[1]}</span>
        <div class="button-container">
          <GifkikkerButton onClick={() => toggleModal((b) => !b)}>
            Continue to shipping →
          </GifkikkerButton>
        </div>
        {showModal() ? (
          <Modal onClick={() => toggleModal((b) => !b)}>
            <Card>
              Areyou an existing customer?
              <GifkikkerButton
                onClick={() => {
                  localStorage.setItem("user", JSON.stringify(user.latest));
                  navigate(`/order?email=${userEmail()}`);
                }}
              >
                Existing customer
              </GifkikkerButton>
              <GifkikkerButton onClick={() => navigate(`/register`)}>
                New customer
              </GifkikkerButton>
              <GifkikkerInput onInput={trigger} placeholder={`email address`} />
              <Show when={user && !user.loading} fallback={<Spinner />}>
                {user.error ? (
                  <span>{user.error}</span>
                ) : (
                  <span>{user.latest?.name}</span>
                )}
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
