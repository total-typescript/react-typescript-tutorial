export const Component = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & JSX.IntrinsicElements[TAs],
) => {
  const Comp = props.as as string;
  return <Comp {...(props as any)}></Comp>;
};

const yeah = <Component as="input" value="awd"></Component>;
