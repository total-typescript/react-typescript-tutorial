import { ComponentProps } from "react";

const buttonPropsMap = {
  reset: {
    className: "bg-blue-500 text-white",
    type: "reset",
    // @ts-expect-error
    illegalProperty: "whatever",
  },
  submit: {
    className: "bg-gray-200 text-black",
    type: "submit",
    // @ts-expect-error
    illegalProperty: "whatever",
  },
  next: {
    className: "bg-green-500 text-white",
    type: "button",
    // @ts-expect-error
    illegalProperty: "whatever",
  },
};

type ButtonProps = {
  variant: keyof typeof buttonPropsMap;
};

/**
 * 1. There's a loooong error message here. Try to decode what the error message
 * is referring to.
 *
 * 2. You might also notice that inside buttonPropsMap above, we're not getting
 * autocomplete for the props that are available on a button. Why is that?
 *
 * 3. Try to find a type for buttonPropsMap that makes the error go away, and
 * keeps the tests working at the bottom of the file.
 *
 * We want to:
 *
 * - Make sure that 'variant' isn't manually typed
 * - Make the error go away
 * - Get autocomplete for buttonPropsMap
 *
 * Hint - you might be 'unsatisfied' if you don't find the right solution.
 */

export const Button = (props: ButtonProps) => {
  return <button {...buttonPropsMap[props.variant]}>Click me</button>;
};

const Parent = () => {
  return (
    <>
      <Button variant="next"></Button>
      <Button variant="reset"></Button>
      <Button variant="submit"></Button>

      {/* @ts-expect-error */}
      <Button variant="something"></Button>
      {/* @ts-expect-error */}
      <Button></Button>
    </>
  );
};
