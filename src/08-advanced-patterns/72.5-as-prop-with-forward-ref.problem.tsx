import { ComponentPropsWithoutRef, ElementType, forwardRef } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Link = forwardRef(
  <T extends ElementType = "a">(
    props: {
      as?: T;
    } & ComponentPropsWithoutRef<T>,
  ) => {
    const { as: Comp = "a", ...rest } = props;
    return <Comp {...rest}></Comp>;
  },
);

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

<Link
  as="div"
  // @ts-expect-error: Property 'href' does not exist
  href="awdawd"
></Link>;
