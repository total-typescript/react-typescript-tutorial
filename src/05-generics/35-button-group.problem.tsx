import { Equal, Expect } from "../helpers/type-utils";

interface ButtonGroupProps<TButtons extends string[]> {
  buttons: TButtons;
  onClick: (value: TButtons[number]) => void;
}

/**
 * Here, we've changed the type of the `buttons` prop to be an array of strings.
 * But the inference has broken in the ButtonGroup component below!
 *
 * See if you can find a way to fix it. A 'const' annotation may help:
 *
 * https://www.totaltypescript.com/const-type-parameters
 *
 * OR you might be able to fix it by changing the type of the type argument.
 */
const ButtonGroup = <TButtons extends string[]>(
  props: ButtonGroupProps<TButtons>,
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
      /**
       * Instead of inferring the type of `value` to be "add" | "delete", it's
       * now inferred to be `string`.
       */
      type test = Expect<Equal<typeof value, "add" | "delete">>;
    }}
    buttons={["add", "delete"]}
  ></ButtonGroup>
</>;
