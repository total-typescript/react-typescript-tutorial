export const Component = (props: any) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

// Should work, and you should get autocomplete on the
// props for the 'a' tag
const example1 = <Component as="a" href="awdawd"></Component>;

const example2 = (
  <Component
    as="div"
    // @ts-expect-error: Property 'href' does not exist
    href="awdawd"
  ></Component>
);
