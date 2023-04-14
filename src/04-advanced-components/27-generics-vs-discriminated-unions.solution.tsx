export type ModalProps =
  | {
      isOpen: boolean;
    } & (
      | {
          variant: "with-button";
          buttonLabel: string;
          onButtonClick: () => void;
        }
      | {
          variant: "without-button";
        }
    );

export const Modal = (props: ModalProps) => {
  // ...
  return null;
};

export const Parent = () => {
  return (
    <>
      <Modal
        isOpen
        variant="with-button"
        buttonLabel="Click Me!"
        onButtonClick={() => {}}
      ></Modal>
      <Modal isOpen variant="without-button"></Modal>

      {/* @ts-expect-error */}
      <Modal isOpen variant="with-button"></Modal>

      <Modal
        isOpen
        variant="without-button"
        /* @ts-expect-error */
        onButtonClick={() => {}}
      />
    </>
  );
};
