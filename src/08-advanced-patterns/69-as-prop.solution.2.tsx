import { Equal, Expect } from "../helpers/type-utils";

export const Wrapper = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & React.ComponentProps<TAs>,
) => {
  const Comp = props.as as string;

  return <Comp {...(props as any)}></Comp>;
};

/**
 * Should work specifying a 'button'
 */

const Example1 = () => {
  return (
    <>
      <Wrapper
        as="button"
        // @ts-expect-error doesNotExist is not a valid prop
        doesNotExist
      ></Wrapper>

      <Wrapper
        as="button"
        // e should be inferred correctly
        onClick={(e) => {
          type test = Expect<
            Equal<typeof e, React.MouseEvent<HTMLButtonElement>>
          >;
        }}
      ></Wrapper>
    </>
  );
};

/**
 * Should work specifying a 'div'
 */

const Example2 = () => {
  return (
    <>
      <Wrapper
        as="div"
        // @ts-expect-error doesNotExist is not a valid prop
        doesNotExist
      ></Wrapper>

      <Wrapper
        as="div"
        // e should be inferred correctly
        onClick={(e) => {
          type test = Expect<Equal<typeof e, React.MouseEvent<HTMLDivElement>>>;
        }}
      ></Wrapper>
    </>
  );
};
