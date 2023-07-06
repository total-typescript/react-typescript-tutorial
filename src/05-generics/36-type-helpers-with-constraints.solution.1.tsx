import { Equal, Expect } from "../helpers/type-utils";

type AllOrNothing<T extends object> = T | ToUndefinedObject<T>;

type ToUndefinedObject<T extends object> = Partial<Record<keyof T, undefined>>;

type tests = [
  // @ts-expect-error
  AllOrNothing<string>,
  // @ts-expect-error
  AllOrNothing<number>,
  // @ts-expect-error
  AllOrNothing<undefined>,
  Expect<Equal<AllOrNothing<{ a: string }>, { a: string } | { a?: undefined }>>
];

// Note that this isn't perfect! Try AllOrNothing<string[]>
