// How to use discriminated unions in props
// With variant

type ModalProps = (
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    }
) & {
  buttonColor: string;
};

export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    return <div>Title: {props.title}</div>;
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
