import { useNavigate } from "@solidjs/router";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  Match,
  onMount,
  Show,
  Switch,
} from "solid-js";
import { useLocation } from "solid-start";
import { fetchUser } from "~/api/api";
import { Card } from "~/components/Card";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";

import { Cart, Order, Orders, OrderStatus } from "~/models/order";
import { User } from "~/models/user";
import { getCalculatedCartTotal } from "~/utils/calculations";
import "./order.scss";

export default function OrderPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const [user, setUser] = createSignal<User>(JSON.parse("{}") as User);
  const [selectedPayment, setSelectedPayment] = createSignal<string>();
  const [selectedShipping, setSelectedShipping] = createSignal<string>();
  const [totalCost, setTotalCost] = createSignal<number>(0);
  const orderId = `${new Date().valueOf()}`;
  const navigate = useNavigate();
  onMount(() => {
    setCurrentCart(JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart);
    setUser(JSON.parse(localStorage.getItem("user") ?? "{}") as User);
  });

  createEffect(() => {
    setTotalCost(
      getCalculatedCartTotal(currentCart())[1] +
        (selectedShipping() === "homeDelivery" ? 4.59 : 0)
    );
  });

  const placeOrder = () => {
    const currentOrders = JSON.parse(
      localStorage.getItem("orders") ?? "{}"
    ) as Orders;
    console.log(currentOrders);
    const newOrder: Order = {
      email: user().email,
      orderId,
      items: currentCart(),
      orderTotal: totalCost(),
      paymentMethod: selectedPayment() ?? "",
      shippingMethod: selectedShipping() ?? "",
      status: OrderStatus.PENDING,
      shippingAddress: `${user()?.address?.street}, 
      ${user()?.address?.city}, 
      ${user()?.address?.province}, 
      ${user()?.address?.country}, 
      ${user()?.address?.postalCode}`,
    };
    const newOrders = { ...currentOrders, [orderId]: newOrder };
    console.log(newOrders);
    localStorage.setItem("orders", JSON.stringify(newOrders));
    navigate(`/confirm`);
  };

  return (
    <main>
      YOur order here {user()?.email}
      <Card>
        <div>
          {/* <For
            each={Object.entries(currentCart())}
            fallback={<div>loading</div>}
          >
            {(cartItem) => (
              <div>
                <div>{cartItem[1].product.title}</div>
              </div>
            )}
          </For> */}
          <h3>Items total</h3>
        </div>
        {`€ ${totalCost()}`}
      </Card>
      <div>
        <Show when={user()?.email !== undefined} fallback={<div>loading</div>}>
          <div>
            <fieldset // Because selection returns a HTMLInputElement
              onChange={(e) =>
                setSelectedShipping((e.target as HTMLInputElement).value)
              }
            >
              <legend>Shipping method</legend>
              <GifkikkerInput
                type="radio"
                value="pickup"
                name="address"
                placeholder="Pickup"
              />
              <GifkikkerInput
                type="radio"
                value="homeDelivery"
                name="address"
                placeholder="Home Delivery"
              />
            </fieldset>
            <Card class="option">
              <Switch fallback={<div>Select a shipping method</div>}>
                <Match when={selectedShipping() === "homeDelivery"}>
                  <h3>Shipping to</h3>
                  <span>
                    <label>Address</label>
                    <label>
                      {`${user()?.address?.street}, 
                  ${user()?.address?.city}, 
                  ${user()?.address?.province}, 
                  ${user()?.address?.country}, 
                  ${user()?.address?.postalCode}`}
                    </label>
                  </span>
                  <span>
                    <label>Cost</label>
                    <label>€4.59 (flat fee)</label>
                  </span>
                </Match>
                <Match when={selectedShipping() === "pickup"}>
                  <h3>Pickup at</h3>
                  <span>
                    <label>Address</label>
                    <label>
                      {`4 Bree Street, Cape Town City Center, Cape Town, Western Cape, South Africa, 8001`}
                    </label>
                  </span>
                  <span>
                    <label>Cost</label>
                    <label>No additional charge</label>
                  </span>
                </Match>
              </Switch>
            </Card>
          </div>
        </Show>
      </div>
      <div>
        <fieldset
          // Because selection returns a HTMLInputElement
          onChange={(e) =>
            setSelectedPayment((e.target as HTMLInputElement).value)
          }
        >
          <legend>Payment method</legend>
          <GifkikkerInput
            type="radio"
            value="cash"
            name="payment"
            placeholder="Cash on delivery"
          />
          <GifkikkerInput
            type="radio"
            value="prepayment"
            name="payment"
            placeholder="Prepayment"
          />
          <GifkikkerInput
            type="radio"
            value="onAccount"
            name="payment"
            placeholder="On Account"
          />
        </fieldset>
        <Card class="option">
          <Switch fallback={<div>Select a payment method</div>}>
            <Match when={selectedPayment() === "cash"}>
              <h3>Pay cash when the item is delivered</h3>
              <p>
                Remember to have the exact amount, the delivery attendant won't
                have any change
              </p>
              <span>
                <label>Total</label>
                <label>{`€ ${totalCost()}`}</label>
              </span>
            </Match>
            <Match when={selectedPayment() === "prepayment"}>
              <h3>Make your payment to our bank account</h3>
              <span class="option__prepayment">
                <label>Account details</label>
                <div class="option__prepayment__details">
                  <label>
                    Account holder: <label>Gifkikker Inc.</label>
                  </label>
                  <label>
                    Payment ref: <label>{orderId}</label>
                  </label>
                  <label>
                    Account number: <label>123456789</label>
                  </label>
                  <label>
                    Branch code: <label>450020</label>
                  </label>
                </div>
              </span>
              <span>
                <label>Total</label>
                <label>{`€ ${totalCost()}`}</label>
              </span>
            </Match>
            <Match when={selectedPayment() === "onAccount"}>
              <h3>Add the cost to your tab</h3>
              <span>
                <label>Account</label>
                <label>{user().email}</label>
              </span>
              <span>
                <label>Total</label>
                <label>{`€ ${totalCost()}`}</label>
              </span>
            </Match>
          </Switch>
        </Card>
      </div>
      <div class="button-container">
        <GifkikkerButton onClick={() => placeOrder()}>
          Confirm order →
        </GifkikkerButton>
      </div>
    </main>
  );
}
