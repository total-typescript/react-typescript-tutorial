import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { Equal, Expect, Extends } from "../helpers/type-utils";

/**
 * We add TValues as a generic to our hook, and use it to type the defaultValues.
 *
 * We constrain it to FieldValues so that it's assignable to useForm's defaultValues.
 */
const useCustomForm = <TValues extends FieldValues>(defaultValues: TValues) => {
  const form = useForm({
    /**
     * There's a strange papercut here where we have to cast defaultValues as
     * DefaultValues<TValues> to get it to work.
     */
    defaultValues: defaultValues as DefaultValues<TValues>,
  });

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    getValues: form.getValues,
  };
};

// ---- TESTS ----

// @ts-expect-error defaultValues is required
useCustomForm();

useCustomForm(
  // @ts-expect-error defaultValues must be an object
  2,
);

const customForm = useCustomForm({
  firstName: "",
  lastName: "",
});

customForm.handleSubmit((values) => {
  type test = Expect<
    // Expect that inside handleSubmit, it's inferred as
    // { firstName: string; lastName: string }
    Extends<
      {
        firstName: string;
        lastName: string;
      },
      typeof values
    >
  >;
});

// Expect that only the methods we want are exposed
type test = Expect<
  Equal<keyof typeof customForm, "register" | "handleSubmit" | "getValues">
>;
