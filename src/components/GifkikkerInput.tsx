import { Component, createUniqueId, JSX } from "solid-js";
import "./GifkikkerInput.scss";

interface GifkikkerInput extends JSX.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

export const GifkikkerInput: Component<GifkikkerInput> = (props) => {
  const uid = createUniqueId();
  return (
    <div class="input-group">
      <input
        class="input-group__box"
        {...props}
        placeholder={""}
        id={props.id ?? uid}
      />
      <label for={uid} class="input-group__container" itemRef={props.type}>
        {props.placeholder}
      </label>
    </div>
  );
};
