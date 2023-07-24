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

const Link = (props: { href: string; children?: React.ReactNode }) => {
  return <a href={props.href}>{props.children}</a>;
};

<Wrapper as={Link} href="awdawd" />;
<Wrapper
  as="button"
  onClick={(e) => {
    type test = Expect<Equal<typeof e, React.MouseEvent<HTMLButtonElement>>>;
  }}
/>;
