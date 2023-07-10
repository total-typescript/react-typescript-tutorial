import { Equal, Expect } from "../helpers/type-utils";

type InputProps = React.ComponentProps<"input">;

/**
 * OR, we can do it by making COMPONENTS 'satisfy'
 * a type that is a Record of React.FC<InputProps>.
 */
const COMPONENTS = {
  text: (props) => {
    return <input {...props} type="text" />;
  },
  number: (props) => {
    return <input {...props} type="number" />;
  },
  password: (props) => {
    return <input {...props} type="password" />;
  },
} satisfies Record<string, React.ComponentType<InputProps>>;

/**
 * Then, we can derive the type of input from the
 * keys of COMPONENTS.
 */
type Input = keyof typeof COMPONENTS;

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
