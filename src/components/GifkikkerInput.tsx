import { Component, JSX } from "solid-js";
import "./GifkikkerInput.scss";

interface GifkikkerInput extends JSX.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

export const GifkikkerInput: Component<GifkikkerInput> = (props) => {
  return (
    <div class="input-group">
      <input class="input-group__box" {...props} placeholder={""} />
      <span class="input-group__container">{props.placeholder}</span>
    </div>
  );
};
