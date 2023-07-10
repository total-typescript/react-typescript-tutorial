import React from "react";

/**
 * This is a further extension of 'as'. This time, we can pass in
 * _any_ component as a prop, and it'll be rendered with the other
 * props passed in.
 *
 * 1. Figure out the correct typings for the `Wrapper` component.
 *
 * The solution uses generics, and the ComponentType helper.
 */
export const Wrapper = (props: { as: unknown }) => {
  const Comp = props.as;
  return <Comp {...props}></Comp>;
};

const Link = (props: { href: string; children?: React.ReactNode }) => {
  return <a href={props.href}>{props.children}</a>;
};

<Wrapper as={Link} href="awdawd"></Wrapper>;
