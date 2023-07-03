import { Equal, Expect } from "../helpers/type-utils";

interface ButtonGroupProps<TButton extends readonly string[]> {
  buttons: TButton;
  onClick: (value: TButton[number]) => void;
}

/**
 * This is an alternative solution, though it isn't quite as clean
 * as the first solution. The main difference is that it uses the
 * const annotation to infer the type of the buttons prop.
 *
 * This behaves the same, but requires more annotations:
 *
 * 'readonly' on each string[]
 * TButton[number] instead of TButton on the onClick prop
 */
const ButtonGroup = <const TButton extends readonly string[]>(
  props: ButtonGroupProps<TButton>,
) => {
  return (
    <div>
      {props.buttons.map((button) => {
        return (
          <button
            key={button}
            onClick={() => {
              props.onClick(button);
            }}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

<>
  <ButtonGroup
    onClick={(value) => {
      type test = Expect<Equal<typeof value, "add" | "delete">>;
    }}
    buttons={["add", "delete"]}
  ></ButtonGroup>
</>;
