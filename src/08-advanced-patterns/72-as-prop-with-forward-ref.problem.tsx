import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  useRef,
} from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * FYI - this solution took me the best part of a whole day to find,
 * and the help of several TS experts in the community.
 *
 * So, don't feel bad if you don't find it at all.
 */

export const UnwrappedLink = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & ComponentPropsWithoutRef<ElementType extends TAs ? "a" : TAs>,
  ref: ForwardedRef<any>,
) => {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest} ref={ref}></Comp>;
};

const Link = forwardRef(UnwrappedLink);

/**
 * Should work without specifying 'as'
 */

const Example1 = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const wrongRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Link ref={ref} />

      <Link
        // @ts-expect-error incorrect ref
        ref={wrongRef}
      />

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
  const ref = useRef<HTMLButtonElement>(null);
  const wrongRef = useRef<HTMLSpanElement>(null);

  return (
    <>
      {/* CHECK ME! Check if autocomplete works on 'as' */}
      <Link as="button" />

      <Link as="button" ref={ref} />

      <Link
        as="button"
        // @ts-expect-error incorrect ref
        ref={wrongRef}
      />

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

const Custom = forwardRef(
  (
    props: { thisIsRequired: boolean },
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    return <a ref={ref} />;
  },
);

const Example3 = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const wrongRef = useRef<HTMLDivElement>(null);
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

      <Link as={Custom} ref={ref} thisIsRequired />

      <Link
        as={Custom}
        // @ts-expect-error incorrect ref
        ref={wrongRef}
        thisIsRequired
      />
    </>
  );
};
