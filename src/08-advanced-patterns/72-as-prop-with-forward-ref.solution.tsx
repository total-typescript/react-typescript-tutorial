import {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  useRef,
} from "react";
import { Equal, Expect } from "../helpers/type-utils";

// Added fixedForwardRef from a previous exercise

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

// Added a DistributiveOmit type

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

export const UnwrappedLink = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? "a" : TAs>,
    "as"
  >,
  ref: ForwardedRef<any>,
) => {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest} ref={ref}></Comp>;
};

const Link = fixedForwardRef(UnwrappedLink);

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
