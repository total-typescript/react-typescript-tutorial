export const Component = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & JSX.IntrinsicElements[TAs],
) => {
  const Comp = props.as as string;

  return <Comp {...(props as any)}></Comp>;
};

const example1 = <Component as="a" href="awdawd"></Component>;

const example2 = (
  <Component
    as="div"
    // @ts-expect-error: Property 'href' does not exist
    href="awdawd"
  ></Component>
);
