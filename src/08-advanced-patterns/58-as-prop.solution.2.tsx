export const Wrapper = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & JSX.IntrinsicElements[TAs],
) => {
  const Comp = props.as as string;

  return <Comp {...(props as any)}></Comp>;
};

const example1 = <Wrapper as="a" href="awdawd"></Wrapper>;

const example2 = (
  <Wrapper
    as="div"
    // @ts-expect-error: Property 'href' does not exist
    href="awdawd"
  ></Wrapper>
);
