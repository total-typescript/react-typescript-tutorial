type AsProps = {
  [K in keyof JSX.IntrinsicElements]: {
    as: K;
  } & JSX.IntrinsicElements[K];
}[keyof JSX.IntrinsicElements];

export const Component = (props: AsProps) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

const yeah = <Component as="a" href="awdawd"></Component>;
