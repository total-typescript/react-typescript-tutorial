import React, { ComponentProps, ComponentType } from "react";

export const Wrapper = <T extends ComponentType<any>>(
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

<Wrapper as={Link} href="awdawd"></Wrapper>;
