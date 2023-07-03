import { Equal, Expect } from "../helpers/type-utils";

declare global {
  namespace React {
    // Note that it doesn't need to be exported
    interface MySolutionInterface {
      foo: string;
    }
  }
}

type test = Expect<Equal<React.MySolutionInterface, { foo: string }>>;

export {};
