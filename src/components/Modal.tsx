import { Component, JSX } from "solid-js";
import { Portal } from "solid-js/web";
import "./Modal.scss";

interface Modal extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
  variant?: "primary" | "secondary";
}

export const Modal: Component<Modal> = (props) => {
  const handleClick = (
    e: MouseEvent & {
      currentTarget: HTMLDivElement;
      target: Element;
    }
  ) => {
    if (e.target.className === "modal__inside" && props.onClick) {
      // No Typed solution for this currently
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return props.onClick(e);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return undefined;
  };
  return (
    <Portal>
      <div class="modal">
        <div class="modal__inside" onClick={handleClick}>
          {props.children}
        </div>
      </div>
    </Portal>
  );
};
