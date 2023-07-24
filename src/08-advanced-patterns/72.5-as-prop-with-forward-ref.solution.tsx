import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  JSXElementConstructor,
  forwardRef,
  useRef,
} from "react";
import { Equal, Expect } from "../helpers/type-utils";

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type Constraint = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

type Props<
  T extends Constraint,
  P = ComponentProps<Constraint extends T ? "a" : T>,
> = P;

type Example = Props<"button">;

function UnwrappedLink<T extends Constraint>(props: { as?: T } & Props<T>) {
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

const Custom = (props: { thisIsRequired: boolean }) => {
  return null;
};

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
  as: Custom,
  thisIsRequired: true,
});

Link({
  // @ts-expect-error
  ref: wrongRef,
});

// @ts-expect-error: Property 'href' does not exist
<Link as="div" href="awdawd"></Link>;
