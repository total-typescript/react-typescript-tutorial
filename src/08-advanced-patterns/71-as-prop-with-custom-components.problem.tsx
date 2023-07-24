import React from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * This is a further extension of 'as'. This time, we can pass in
 * _any_ component as a prop, and it'll be rendered with the other
 * props passed in.
 *
 * 1. Figure out the correct typings for the `Wrapper` component.
 *
 * The solution uses generics, and the ComponentType helper.
 */
export const Wrapper = (props: { as: unknown }) => {
  const Comp = props.as;
  return <Comp {...props}></Comp>;
};

/**
 * Should work specifying a 'button'
 */

const Example1 = () => {
  return (
    <>
      <Wrapper
        as="button"
        // @ts-expect-error doesNotExist is not a valid prop
        doesNotExist
      ></Wrapper>

      <Wrapper
        as="button"
        // e should be inferred correctly
        onClick={(e) => {
          type test = Expect<
            Equal<typeof e, React.MouseEvent<HTMLButtonElement>>
          >;
        }}
      ></Wrapper>
    </>
  );
};

/**
 * Should work with Custom components!
 */

const Custom = (
  props: { thisIsRequired: boolean },
  ref: React.ForwardedRef<HTMLAnchorElement>,
) => {
  return <a ref={ref} />;
};

const Example2 = () => {
  return (
    <>
      <Wrapper as={Custom} thisIsRequired />
      <Wrapper
        as={Custom}
        // @ts-expect-error incorrectProp should not be allowed
        incorrectProp
      />

      {/* @ts-expect-error thisIsRequired is not being passed */}
      <Wrapper as={Custom}></Wrapper>
    </>
  );
};
