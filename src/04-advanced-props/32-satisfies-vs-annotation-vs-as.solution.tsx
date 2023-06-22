import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

const buttonProps = {
  type: "button",
  // This should be erroring! Why isn't it?
  // @ts-expect-error
  illegalProperty: "I AM ILLEGAL",
} satisfies ComponentProps<"button">;

<>
  <button {...buttonProps}>Click Me!</button>
</>;

const buttonPropType = buttonProps.type;

type test = Expect<Equal<typeof buttonPropType, "button">>;
