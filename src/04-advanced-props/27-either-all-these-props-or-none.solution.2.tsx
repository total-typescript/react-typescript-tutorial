import { ChangeEventHandler } from "react";

/**
 * 1. Consider whether you think 'undefined' or 'never'
 * is better for the 'value' and 'onChange' props.
 */
type InputProps = (
  | {
      value: string;
      onChange: ChangeEventHandler;
    }
  | {
      value?: never;
      onChange?: never;
    }
) & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

export const Test = () => {
  return (
    <div>
      <Input label="Greeting" value="Hello" onChange={() => {}} />
      <Input label="Greeting" />

      {/* @ts-expect-error */}
      <Input label="Greeting" value="Hello" />

      {/* @ts-expect-error */}
      <Input label="Greeting" onChange={() => {}} />
    </div>
  );
};
