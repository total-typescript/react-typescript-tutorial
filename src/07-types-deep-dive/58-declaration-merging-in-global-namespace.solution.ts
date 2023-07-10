import { Equal, Expect } from "../helpers/type-utils";

declare global {
  namespace React {
    interface MyAwesomeSolutionInterface {
      foo: string;
    }
  }
}

/**
 * By declaring MyAwesomeSolutionInferface for the second time
 * in the same scope, we can add properties to it.
 *
 * The power of declaration merging!
 */
declare global {
  namespace React {
    interface MyAwesomeSolutionInterface {
      bar: string;
    }
  }
}

type test = Expect<
  Equal<React.MyAwesomeSolutionInterface, { foo: string; bar: string }>
>;

export {};
