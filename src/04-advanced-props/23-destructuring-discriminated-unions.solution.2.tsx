type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

/**
 * The best solution is to destructure AFTER the variant has been narrowed.
 *
 * This gives TypeScript the chance to apply the narrowing to the 'props' object,
 * which it understands that 'variant' is a property of.
 */
export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    const { title } = props;
    return <div>Title: {title}</div>;
  }
};

export const Test = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" />
      <Modal variant="no-title" />

      {/* @ts-expect-error */}
      <Modal />
      <Modal
        variant="no-title"
        // @ts-expect-error
        title="Oh dear"
      />
    </div>
  );
};
