import { ElementType } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Link = <TAs extends ElementType>(
  props: {
    as: TAs;
  } & React.ComponentPropsWithoutRef<TAs>,
) => {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest}></Comp>;
};

/**
 * Should work without specifying 'as'
 */

const Example1 = () => {
  return (
    <>
      <Link
        // @ts-expect-error doesNotExist is not a valid prop
        doesNotExist
      ></Link>

      <Link
        // e should be inferred correctly
        onClick={(e) => {
          type test = Expect<
            Equal<typeof e, React.MouseEvent<HTMLAnchorElement>>
          >;
        }}
      ></Link>
    </>
  );
};

/**
 * Should work specifying a 'button'
 */

const Example2 = () => {
  return (
    <>
      <Link
        as="button"
        // @ts-expect-error doesNotExist is not a valid prop
        doesNotExist
      ></Link>

      <Link
        as="button"
        // e should be inferred correctly
        onClick={(e) => {
          type test = Expect<
            Equal<typeof e, React.MouseEvent<HTMLButtonElement>>
          >;
        }}
      ></Link>
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

const Example3 = () => {
  return (
    <>
      <Link as={Custom} thisIsRequired />
      <Link
        as={Custom}
        // @ts-expect-error incorrectProp should not be allowed
        incorrectProp
      />

      {/* @ts-expect-error thisIsRequired is not being passed */}
      <Link as={Custom}></Link>
    </>
  );
};
