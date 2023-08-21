import {
  DefaultValues,
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { Equal, Expect, Extends } from "../helpers/type-utils";

const useCustomForm = <TValues extends FieldValues>(
  defaultValues: TValues,
): {
  register: UseFormRegister<TValues>;
  handleSubmit: UseFormHandleSubmit<TValues>;
  getValues: UseFormGetValues<TValues>;
} => {
  const form = useForm({
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
