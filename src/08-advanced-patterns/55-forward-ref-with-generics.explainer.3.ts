import { Equal, Expect } from "../helpers/type-utils";

/**
 * Here's a detailed breakdown on why forwardRef doesn't work.
 */

/**
 * 1. We create a type that represents a function, but with
 * some other attributes.
 */
type FuncExpected<Argument> = {
  (arg: Argument): Argument;
  someOtherThing?: string;
};

/**
 * 2. We create a function that takes a function as an argument,
 * and infers the position of Argument.
 *
 * This function doesn't do anything at runtime - it just returns
 * the function that was passed in. But it behaves similarly to
 * forwardRef.
 */
const forwardRefShim = <Argument>(func: FuncExpected<Argument>) => {
  return (arg: Argument) => func(arg);
};

/**
 * 3. We create an identity function, that just takes in an argument
 * and returns it.
 */
const identityFunc = <Argument>(arg: Argument) => {
  return arg;
};

/**
 * 4. As you can see, when it's not wrapped, identityFunc returns
 * the type that we pass in, 123.
 */
const result1 = identityFunc(123);

type test1 = Expect<Equal<typeof result1, 123>>;

/**
 * 5. But when we wrap it in forwardRefShim, it loses its powers
 * of inference! Just like forwardRef.
 */
const wrappedIdentityFunc = forwardRefShim(identityFunc);

const result2 = wrappedIdentityFunc(123);

type test2 = Expect<Equal<typeof result2, 123>>;

/**
 * 6. Here's the really crazy part. Go back up to FuncExpected.
 * Comment out the someOtherThing property.
 *
 * It now works! This is because when a function is _just_ a function,
 * TypeScript uses its higher-order function powers on it. But when
 * it has other properties, it doesn't.
 *
 * Bizarre!
 */
