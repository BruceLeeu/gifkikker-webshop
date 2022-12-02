import { Component, JSX } from "solid-js";
import "./StyledTable.scss";

interface StyledTable extends JSX.HTMLAttributes<HTMLTableElement> {
  children: JSX.Element[];
  variant?: "primary" | "secondary";
}

export const StyledTable: Component<StyledTable> = (props) => {
  return (
    <div>
      <table class={"base"}>{props.children}</table>
    </div>
  );
};
