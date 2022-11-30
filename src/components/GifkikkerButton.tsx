import { Component, JSX } from "solid-js";
import "./GifkikkerButton.css";

interface GifkikkerButton extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element;
  variant?: "primary" | "secondary";
}

export const GifkikkerButton: Component<GifkikkerButton> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <button class="increment" {...props}>
        {children}
      </button>
    </div>
  );
};
