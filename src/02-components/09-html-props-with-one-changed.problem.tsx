import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const Input = (
  props: ComponentProps<"input"> & { onChange: (value: string) => void }
) => {
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
