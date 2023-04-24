import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

type InputProps = OverrideProps<
  ComponentProps<"input">,
  {
    onChange: (value: string) => void;
  }
>;

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
