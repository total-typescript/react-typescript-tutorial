import { ComponentProps } from "react";

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
