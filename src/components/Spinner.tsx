import { Component, JSX } from "solid-js";
import "./Spinner.scss";

interface Spinner extends JSX.HTMLAttributes<HTMLSpanElement> {
  size?: string;
}

export const Spinner: Component<Spinner> = (props) => {
  return (
    <div class="loader-container">
      <span
        class="loader"
        style={{
          width: props.size,
          height: props.size,
        }}
      ></span>
    </div>
  );
};
