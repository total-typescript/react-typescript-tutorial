import React, { ComponentPropsWithoutRef, ElementType } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Wrapper = <T extends ElementType>(
  props: {
    as: T;
  } & ComponentPropsWithoutRef<T>,
) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
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
