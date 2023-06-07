import { ChangeEventHandler } from "react";

type InputProps = AllOrNothing<{
  value: string;
  onChange: ChangeEventHandler;
}> & {
  label: string;
};

/**
 * This is what I'd do in a production app - capture this
 * logic in a reusable type helper.
 */
type AllOrNothing<TProps extends Record<string, any>> =
  | TProps
  | {
      [K in keyof TProps]?: undefined;
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
