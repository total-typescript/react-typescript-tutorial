import { Equal, Expect } from "../helpers/type-utils";

/**
 * This approach also works - specifying defaultString?: string | undefined
 * in the second overload.
 */

function maybeReturnsString(defaultString: string): string;
function maybeReturnsString(
  defaultString?: string | undefined
): string | undefined;
function maybeReturnsString(defaultString?: string) {
  // If you pass a string, it always returns a string
  if (defaultString) {
    return defaultString;
  }

  // Otherwise, it MIGHT return a string or undefined
  return Math.random() > 0.5 ? "hello" : undefined;
}

const example1 = maybeReturnsString("hello");
const example2 = maybeReturnsString(undefined);

type tests = [
  Expect<Equal<typeof example1, string>>,
  Expect<Equal<typeof example2, string | undefined>>
];
