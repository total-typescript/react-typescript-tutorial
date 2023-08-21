import { useForm } from "react-hook-form";
import { Equal, Expect, Extends } from "../helpers/type-utils";

/**
 * Here, we're creating a wrapper around react-hook-form's useForm hook.
 *
 * We want to change the API slightly so that only certain methods are
 * exposed. We also want to make sure that defaultValues is ALWAYS
 * required.
 *
 * A clue: you'll need this line of code:
 *
 * defaultValues as DefaultValues<TValues>
 */
const useCustomForm = (defaultValues: any) => {
  const form = useForm({
    defaultValues: defaultValues,
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
