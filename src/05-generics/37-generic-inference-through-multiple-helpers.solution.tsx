import { Equal, Expect } from "../helpers/type-utils";

interface Button<TValue extends string> {
  value: TValue;
  label: string;
}

interface ButtonGroupProps<TValue extends string> {
  buttons: Button<TValue>[];
  onClick: (value: TValue) => void;
}

const ButtonGroup = <TValue extends string>(
  props: ButtonGroupProps<TValue>,
) => {
  return (
    <div>
      {props.buttons.map((button) => {
        return (
          <button
            key={button.value}
            onClick={() => {
              props.onClick(button.value);
            }}
          >
            {button.label}
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
    buttons={[
      {
        value: "add",
        label: "Add",
      },
      {
        value: "delete",
        label: "Delete",
      },
    ]}
  ></ButtonGroup>
</>;
