import React, { ComponentProps, JSXElementConstructor } from "react";

export const Component = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>(
  props: {
    as: T;
  } & ComponentProps<T>,
) => {
  const Comp = props.as;
  return <Comp {...props}></Comp>;
};

const Link = (props: { href: string; children?: React.ReactNode }) => {
  return <a href={props.href}>{props.children}</a>;
};

// It works!

<Component as={Link} href="awdawd"></Component>;
