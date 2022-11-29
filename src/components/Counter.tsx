import { createSignal } from "solid-js";
import { useNavigate } from "solid-start";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const navigate = useNavigate();
  return (
    <div>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
      <button onClick={() => navigate("/product/item123")}>Do Something</button>
    </div>
  );
}
