import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  useRef,
} from "react";
import { Equal, Expect } from "../helpers/type-utils";

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

export const Link = fixedForwardRef(
  <T extends ElementType = "a">(
    props: {
      as?: T;
    } & ComponentProps<T>,
  ) => {
    const { as = "a", ...rest } = props;
    const Comp = as as any;
    return <Comp {...rest}></Comp>;
  },
);

const Test = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  return <Link as="a" href="/" ref={ref}></Link>;
};

const Custom = (props: { thisIsRequired: boolean }) => {
  return null;
};

<Link as={Custom} thisIsRequired />;

// @ts-expect-error Property 'thisIsRequired' is missing
<Link as={Custom} />;

const ref = useRef<HTMLButtonElement>(null);

<Link
  as="button"
  onClick={(e) => {
    type test = Expect<Equal<typeof e, React.MouseEvent<HTMLButtonElement>>>;
  }}
  ref={ref}
></Link>;

<Link
  as="div"
  // @ts-expect-error: Property 'href' does not exist
  href="awdawd"
></Link>;
