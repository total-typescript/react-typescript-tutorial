import { ComponentPropsWithoutRef, ElementType } from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Function overloads are another solution which work. We're getting
 * closer to extreme verbosity, but it works!
 *
 * Though - the error at the bottom of the file becomes much
 * harder to read.
 */

function Link<T extends ElementType>(
  props: {
    as: T;
  } & ComponentPropsWithoutRef<T>,
): React.ReactNode;
function Link(props: ComponentPropsWithoutRef<"a">): React.ReactNode;
function Link<T extends ElementType>(
  props: {
    as?: T;
  } & ComponentPropsWithoutRef<T>,
) {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest}></Comp>;
}

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
