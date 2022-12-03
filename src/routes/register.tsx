import { createEffect, createSignal, onMount } from "solid-js";
import { useNavigate } from "solid-start";
import { GifkikkerButton } from "~/components/GifkikkerButton";
import { GifkikkerInput } from "~/components/GifkikkerInput";
import { Cart } from "~/models/product";
import { User } from "~/models/user";
import "./register.scss";

export default function RegisterPage() {
  const [currentCart, setCurrentCart] = createSignal<Cart>(
    JSON.parse("{}") as Cart
  );
  const emptyUser: User = {
    address: {
      city: "",
      country: "",
      postalCode: "",
      province: "",
      street: "",
    },
    email: "",
    name: "",
  };
  // `equals: false` allows the object to be updated granularly
  const [user, setUser] = createSignal<User>(emptyUser, { equals: false });

  const navigate = useNavigate();
  const [showModal, toggleModal] = createSignal(false);

  onMount(() => {
    setCurrentCart(JSON.parse(localStorage.getItem("cart") ?? "{}") as Cart);
  });

  createEffect(() => {
    console.log(user());
  });

  const updateUser = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: Element;
    }
  ) => {
    switch (e.currentTarget.id) {
      case "email":
        setUser((u) => {
          u.email = e.currentTarget.value;
          return u;
        });
        break;
      case "name":
        setUser((u) => {
          u.name = e.currentTarget.value;
          return u;
        });
        break;
      case "streetAddress":
        setUser((u) => {
          u.address.street = e.currentTarget.value;
          return u;
        });
        break;
      case "city":
        setUser((u) => {
          u.address.city = e.currentTarget.value;
          return u;
        });
        break;
      case "province":
        setUser((u) => {
          u.address.province = e.currentTarget.value;
          return u;
        });
        break;
      case "country":
        setUser((u) => {
          u.address.country = e.currentTarget.value;
          return u;
        });
        break;
      case "postalCode":
        setUser((u) => {
          u.address.postalCode = e.currentTarget.value;
          return u;
        });
        break;

      default:
        break;
    }
  };

  return (
    <main>
      <h1>Register your user here</h1>
      <h3>Personal Details</h3>
      <div class="details__personal">
        <GifkikkerInput
          id="email"
          placeholder="email"
          type="email"
          value={user().email}
          onInput={updateUser}
        />
        <GifkikkerInput
          id="name"
          placeholder="name"
          value={user().name}
          onInput={updateUser}
        />
      </div>
      <h3>Shipping Address</h3>
      <div class="details__address">
        <GifkikkerInput
          id="streetAddress"
          placeholder="Street address"
          onInput={updateUser}
        />
        <GifkikkerInput id="city" placeholder="City" onInput={updateUser} />
        <GifkikkerInput
          id="province"
          placeholder="State/Province"
          onInput={updateUser}
        />
        <GifkikkerInput
          id="country"
          placeholder="Country"
          onInput={updateUser}
        />
        <GifkikkerInput
          id="postalCode"
          placeholder="Postal Code"
          onInput={updateUser}
        />
      </div>
      <GifkikkerButton
        onClick={() => {
          localStorage.setItem("user", JSON.stringify(user()));
          navigate(`/order?email=${user()?.email}`);
        }}
      >
        Register
      </GifkikkerButton>
    </main>
  );
}
