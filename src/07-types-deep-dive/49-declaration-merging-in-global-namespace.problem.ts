import { Equal, Expect } from "../helpers/type-utils";

declare global {
  namespace React {
    interface MyAwesomeInterface {
      foo: string;
    }
  }
}

/**
 * We can use a feature called declaration merging in TypeScript to
 * CHANGE interfaces in the global namespace.
 *
 * WITHOUT changing the code above, change MyAwesomeInterface to add
 * a property called 'bar' that is a string.
 *
 * Clue: you'll need to use declare global, namespace, and interface
 * again.
 *
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 */

type test = Expect<
  Equal<React.MyAwesomeInterface, { foo: string; bar: string }>
>;

export {};
