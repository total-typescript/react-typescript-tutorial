type types = [
  React.ElementType,
  React.ComponentType,
  React.JSXElementConstructor<{
    prop1: string;
  }>
];

/**
 * ElementType
 *
 * Lets you specify certain types of elements
 * which can receive those props.
 *
 * For instance, Example accepts 'audio' and 'video'!
 * As well as ComponentType<P>
 */
export type Example = React.ElementType<{
  autoPlay?: boolean;
}>;

/**
 * JSXElementConstructor
 */
const Example1 = (props: { prop1: string }) => {
  return null;
};

class Example2 extends React.Component<{
  prop1: string;
}> {
  render(): React.ReactNode {
    this.props.prop1;
    return null;
  }
}

const tests: Array<
  React.JSXElementConstructor<{
    prop1: string;
  }>
> = [Example1, Example2];

const tests2: Array<React.ComponentType<{ prop1: string }>> = [
  Example1,
  Example2,
];
