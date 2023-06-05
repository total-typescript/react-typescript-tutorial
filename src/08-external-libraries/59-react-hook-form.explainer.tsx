import { FieldValues, useForm } from "react-hook-form";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * 1. When you provide default values to useForm, the return type of getValues
 * gets inferred as the shape of those values.
 *
 * Investigate why this is, and what TFieldValues is being used for.
 */
const formWithValues = useForm({
  defaultValues: {
    firstName: "",
    lastName: "",
  },
});

const values = formWithValues.getValues();

type test = Expect<
  Equal<typeof values, { firstName: string; lastName: string }>
>;

/**
 * 2. When you don't pass a default value, the return type of getValues is
 * inferred as FieldValues.
 *
 * Investigate why this is, and what type FieldValues is.
 */

const formWithoutValues = useForm();

const values2 = formWithoutValues.getValues();

type test2 = Expect<Equal<typeof values2, FieldValues>>;
