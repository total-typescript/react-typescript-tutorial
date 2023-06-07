import { ComponentProps } from "react";

/**
 * Sadly, this doesn't work. By typing the map with a ':', we DO
 * get autocomplete inside buttonPropsMap. BUT we also lose the
 * type safety on the variant in ButtonProps.
 *
 * ButtonProps['variant'] is now typed as string, not
 * 'reset' | 'submit' | 'next'.
 *
 * If only there was a way to get the best of both worlds...
 */
const buttonPropsMap: Record<string, ComponentProps<"button">> = {
  reset: {
    className: "bg-blue-500 text-white",
    type: "reset",
  },
  submit: {
    className: "bg-gray-200 text-black",
    type: "submit",
  },
  next: {
    className: "bg-green-500 text-white",
    type: "button",
  },
};

type ButtonProps = {
  variant: keyof typeof buttonPropsMap;
};

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
