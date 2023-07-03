import { useState } from "react";
import { createPortal } from "react-dom";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * In this exercise, we're going to create a Modal component that uses the
 * render props pattern. The Modal component should accept a render prop
 * function that provides ModalChildProps.
 *
 * 1. Change the type of the props the Modal component accepts so that it
 * accepts a render prop function providing ModalChildProps.
 */

interface ModalChildProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const Modal = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {children({
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      })}
      {createPortal(
        <div>
          <h1>Modal</h1>
        </div>,
        document.getElementById("modal-root")!,
      )}
    </>
  );
};

const Parent = () => {
  return (
    <Modal>
      {(props) => {
        type test = Expect<Equal<typeof props, ModalChildProps>>;

        return (
          <>
            <button onClick={props.openModal}>Open Modal</button>
            <button onClick={props.closeModal}>Close Modal</button>
          </>
        );
      }}
    </Modal>
  );
};
