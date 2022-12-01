import { Component, JSX } from "solid-js";
import "./Card.scss";

interface Card extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

export const Card: Component<Card> = ({ children, ...props }) => {
  return (
    <div class="content" {...props}>
      {children}
    </div>
  );
};
