import { FieldValues, useForm } from "react-hook-form";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * 1. When you provide default values to useForm, the return type of getValues
 * gets inferred as the shape of those values.
 *
 * Investigate why this is, and what TFieldValues is being used for.
 */
const Example1 = () => {
  const form = useForm({
    defaultValues: {
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

/**
 * 2. When you don't pass a default value, the return type of getValues is
 * inferred as FieldValues.
 *
 * Investigate why this is, and what type FieldValues is.
 */

const Example2 = () => {
  const form = useForm({});

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
