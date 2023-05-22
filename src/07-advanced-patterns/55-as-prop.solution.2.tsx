export const Component = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & JSX.IntrinsicElements[TAs],
) => {
  const Comp = props.as as string;

  // In this version, we can remove the 'as any' because
  // TypeScript is able to keep up with the inference
  return <Comp {...props}></Comp>;
};

const example1 = <Component as="a" href="awdawd"></Component>;

const example2 = (
  <Component
    as="div"
    // @ts-expect-error: Property 'href' does not exist
    href="awdawd"
  ></Component>
);
