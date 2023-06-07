type AsProps = {
  [K in keyof JSX.IntrinsicElements]: {
    as: K;
  } & JSX.IntrinsicElements[K];
}[keyof JSX.IntrinsicElements];

export const Component = (props: AsProps) => {
  const Comp = props.as;
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
