type AsProps = {
  [K in keyof JSX.IntrinsicElements]: {
    as: K;
  } & JSX.IntrinsicElements[K];
}[keyof JSX.IntrinsicElements];

export const Wrapper = (props: AsProps) => {
  const Comp = props.as;
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
