import { ComponentPropsWithRef, ElementType, forwardRef, useRef } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

function UnwrappedLink<T extends ElementType>(
  props: {
    as?: T;
  } & Omit<ComponentPropsWithRef<ElementType extends T ? "a" : T>, "as">,
) {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest}></Comp>;
}

const Link = fixedForwardRef(UnwrappedLink);

<Link
  href="/"
  onClick={(e) => {
    type test = Expect<Equal<typeof e, React.MouseEvent<HTMLAnchorElement>>>;
  }}
></Link>;

const Custom = forwardRef(
  (
    props: { thisIsRequired: boolean },
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    return <a ref={ref} />;
  },
);

<Link as={Custom} thisIsRequired />;

// @ts-expect-error Property 'thisIsRequired' is missing
<Link as={Custom} />;

<Link
  as="button"
  onClick={(e) => {
    type test = Expect<Equal<typeof e, React.MouseEvent<HTMLButtonElement>>>;
  }}
></Link>;

const ref = useRef<HTMLAnchorElement>(null);
const wrongRef = useRef<HTMLDivElement>(null);

Link({
  ref,
});

Link({
  // @ts-expect-error
  ref: wrongRef,
});

Link({
  as: Custom,
  thisIsRequired: true,
  ref: ref,
});

Link({
  as: Custom,
  thisIsRequired: true,
  // @ts-expect-error
  ref: wrongRef,
});

// @ts-expect-error: Property 'href' does not exist
<Link as="div" href="awdawd"></Link>;

Link({
  as: "div",
});
