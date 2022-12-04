import { useNavigate } from "@solidjs/router";
import { createSignal, For, onMount, Show } from "solid-js";

import { Card } from "~/components/Card";
import { StyledTable } from "~/components/StyledTable";
import { Orders } from "~/models/order";
import "./admin.scss";

export default function Browse() {
  const [orders, setOrders] = createSignal(JSON.parse("{}") as Orders);

  onMount(() => {
    setOrders(JSON.parse(localStorage.getItem("orders") ?? "{}") as Orders);
  });

  const navigate = useNavigate();

  if (orders() !== undefined) {
    return (
      <div class="orders">
        <div class="orders__container">
          <Show when={orders() !== undefined}>
            <For
              each={Object.values(orders())}
              fallback={<div>nothing to see</div>}
            >
              {(order) => (
                <Card>
                  <div class="orders__container__details">
                    <label>
                      For: <label>{order.email}</label>
                    </label>
                    <label>
                      Order ID: <label>{order.orderId}</label>
                    </label>
                    <label>
                      Total: <label>{order.orderTotal}</label>
                    </label>
                    <label>
                      Status: <label>{order.status}</label>
                    </label>

                    <label>
                      Shipping method: <label>{order.shippingMethod}</label>
                    </label>
                    {order.shippingMethod !== "pickup" && (
                      <label>
                        Shipping to: <label>{order.shippingAddress}</label>
                      </label>
                    )}
                  </div>
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
                        each={Object.entries(order?.items)}
                        /* fallback={<div>loading</div>} */
                      >
                        {(cartItem) => (
                          <tr
                            onClick={() =>
                              navigate(
                                `/product/${cartItem[1].product.productId}`
                              )
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
                                €
                                {cartItem[1].product.sellPrice *
                                  cartItem[1].amount}
                              </div>
                            </td>
                          </tr>
                        )}
                      </For>
                    </tbody>
                  </StyledTable>
                </Card>
              )}
            </For>
          </Show>
        </div>
      </div>
    );
  } else {
    return <div>nogood</div>;
  }
}
