import React from "react";

export const Component = (props: { as: any }) => {
  const Comp = props.as;
  return <Comp {...(props as any)}></Comp>;
};

const Link = (props: { href: string; children?: React.ReactNode }) => {
  return <a href={props.href}>{props.children}</a>;
};

const yeah = <Component as={Link} href="awdawd"></Component>;
