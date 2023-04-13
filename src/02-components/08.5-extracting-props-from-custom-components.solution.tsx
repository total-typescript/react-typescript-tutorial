// Imagine NavBar is an external library!

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return <div>Some content</div>;
};

// Your app:

import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type NavBarProps = ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;
