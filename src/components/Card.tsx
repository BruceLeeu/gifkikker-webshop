import { Component, JSX } from "solid-js";
import "./Card.scss";

interface Card extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
}

export const Card: Component<Card> = (props) => {
  return <div class={`card-base ${props.class ?? ""}`}>{props.children}</div>;
};
