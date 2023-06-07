import React from "react";

export const Component = (props: { as: unknown }) => {
  const Comp = props.as;
  return <Comp {...props}></Comp>;
};

const Link = (props: { href: string; children?: React.ReactNode }) => {
  return <a href={props.href}>{props.children}</a>;
};

<Component as={Link} href="awdawd"></Component>;
