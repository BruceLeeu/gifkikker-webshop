import { Component, JSX } from "solid-js";
import "./GifkikkerInput.css";

interface GifkikkerInput extends JSX.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

export const GifkikkerInput: Component<GifkikkerInput> = ({ ...props }) => {
  return (
    <div>
      <input class="increment" {...props} />
    </div>
  );
};
