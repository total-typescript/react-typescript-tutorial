import { ComponentProps } from "react";

/**
 * satisfies gives us what we need. Now, we get autocomplete inside
 * buttonPropsMap, and we get type safety on the variant in ButtonProps.
 *
 * That's because satisfies ensures buttonPropsMap is a Record, but doesn't
 * override its type.
 */
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
} satisfies Record<string, ComponentProps<"button">>;

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
