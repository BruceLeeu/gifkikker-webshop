import { Component, JSX } from "solid-js";
import "./GifkikkerButton.scss";

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
      <button class="button-base" {...props}>
        {children}
      </button>
    </div>
  );
};
