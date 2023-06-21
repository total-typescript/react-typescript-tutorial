type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

/**
 * 1. How do we add a `buttonColor` prop to the `ModalProps` type that is
 * _always_ required across different variants?
 */
export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return (
      <div>
        <span>No title</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>Title: {props.title}</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
};

export const Test = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <Modal buttonColor="red" />
      <Modal
        buttonColor="red"
        variant="no-title"
        // @ts-expect-error
        title="Oh dear"
      />
      <Modal variant="title" title="Hello" buttonColor="red" />
    </div>
  );
};
