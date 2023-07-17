import { Equal, Expect } from "../helpers/type-utils";

type InputProps = React.ComponentProps<"input">;

type Input = "text" | "number" | "password";

/**
 * We can do it by typing Input and making COMPONENTS
 * restricted to only those inputs.
 */
const COMPONENTS: Record<Input, React.ComponentType<InputProps>> = {
  text: (props) => {
    return <input {...props} type="text" />;
  },
  number: (props) => {
    return <input {...props} type="number" />;
  },
  password: (props) => {
    return <input {...props} type="password" />;
  },
};

export const Input = (props: { type: Input } & InputProps) => {
  const Component = COMPONENTS[props.type];
  return <Component {...props} />;
};

<>
  <Input
    type="number"
    onChange={(e) => {
      type test = Expect<Equal<typeof e, React.ChangeEvent<HTMLInputElement>>>;
    }}
  ></Input>
  <Input type="text"></Input>
  <Input type="password"></Input>

  {/* @ts-expect-error */}
  <Input type="email"></Input>
</>;
