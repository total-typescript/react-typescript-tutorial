import { Equal, Expect } from "../helpers/type-utils";

type AllOrNothing<T> = T | ToUndefinedObject<T>;

type ToUndefinedObject<T> = Partial<Record<keyof T, undefined>>;

/**
 * There's a problem with our AllOrNothing type. It's letting
 * us pass ANYTHING as T. We want to constrain it so that it
 * only works with objects.
 */

type tests = [
  // @ts-expect-error
  AllOrNothing<string>,
  // @ts-expect-error
  AllOrNothing<number>,
  // @ts-expect-error
  AllOrNothing<undefined>,
  Expect<Equal<AllOrNothing<{ a: string }>, { a: string } | { a?: undefined }>>
];
