import { Equal, Expect } from "../helpers/type-utils";

interface ButtonGroupProps<TButton extends string> {
  buttons: TButton[];
  onClick: (value: TButton) => void;
}

const ButtonGroup = <TButton extends string>(
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
