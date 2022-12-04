import { createSignal, onMount } from "solid-js";
import { Card } from "~/components/Card";
import { User } from "~/models/user";
import "./confirm.scss";

export default function PaymentPage() {
  const [user, setUser] = createSignal<User>(JSON.parse("{}") as User);

  onMount(() => {
    setUser(JSON.parse(localStorage.getItem("user") ?? "{}") as User);
  });

  return (
    <main>
      <Card class={`special-card`}>
        <div class="special-card__svg">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 32 32"
            style="enable-background:new 0 0 32 32;"
          >
            <g>
              <g id="check_x5F_alt">
                <path
                  d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383
			L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"
                />
              </g>
            </g>
          </svg>
        </div>
        <p>
          Thanks, {user().name}! Your order here has been confirmed. We'll get
          back to you via email as soon at your order is processed.
        </p>
      </Card>
    </main>
  );
}
