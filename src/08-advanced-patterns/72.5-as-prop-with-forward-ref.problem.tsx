import {
  ComponentPropsWithoutRef,
  ElementType,
  JSXElementConstructor,
  forwardRef,
} from "react";
import { Equal, Expect } from "../helpers/type-utils";

function UnwrappedLink<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>(
  props: {
    as?: T;
  } & ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest}></Comp>;
}

const Link = forwardRef(UnwrappedLink);

<Link href="/"></Link>;

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

// @ts-expect-error: Property 'href' does not exist
<Link as="div" href="awdawd"></Link>;
