/**
 * The 'as' prop is notorious for being difficult to type correctly.
 *
 * Here, we've created a component that takes an 'as' prop. The 'as' prop
 * is a string representing the HTML tag to render. The component will
 * render that tag, and pass all the other props through.
 *
 * BUT currently the types of the props that go along with the 'as' prop
 * are not inferred correctly.
 *
 * I've found two solutions. The first uses an IIMT:
 *
 * https://www.totaltypescript.com/immediately-indexed-mapped-type
 *
 * The second uses a generic type.
 *
 * Both solutions make use of:
 *
 * - JSX.IntrinsicElements
 * - keyof
 * - 'as'
 * - Indexed access types
 */

export const Wrapper = (props: any) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

// Should work, and you should get autocomplete on the
// props for the 'a' tag
const example1 = <Wrapper as="a" href="awdawd"></Wrapper>;

const example2 = (
  <Wrapper
    as="div"
    // @ts-expect-error: Property 'href' does not exist
    href="awdawd"
  ></Wrapper>
);
