import { FieldValues, useForm } from "react-hook-form";
import { Equal, Expect } from "../helpers/type-utils";

const Example1 = () => {
  const form = useForm({
    values: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit((values) => {
        type test = Expect<
          Equal<typeof values, { firstName: string; lastName: string }>
        >;
      })}
    >
      <input {...form.register("firstName")} />
      <input {...form.register("lastName")} />
    </form>
  );
};

const Example2 = () => {
  const form = useForm();

  return (
    <form
      onSubmit={form.handleSubmit((values) => {
        type test = Expect<Equal<typeof values, FieldValues>>;
      })}
    >
      <input {...form.register("firstName")} />
      <input {...form.register("lastName")} />
    </form>
  );
};
