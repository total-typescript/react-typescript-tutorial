import { useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * 1. In this exercise, we want to create a version of the useState
 * hook that slightly modifies the API - returning it as an object
 * instead of a tuple.
 *
 * There are _many_ different solutions - but they all involve generics.
 */
export const useStateAsObject = (initial: any) => {
  const [value, set] = useState(initial);

  return {
    value,
    set,
  };
};

const example = useStateAsObject({ name: "Matt" });

type ExampleTests = [
  Expect<Equal<typeof example.value, { name: string }>>,
  Expect<
    Equal<
      typeof example.set,
      React.Dispatch<React.SetStateAction<{ name: string }>>
    >
  >,
];

const num = useStateAsObject(2);

type NumTests = [
  Expect<Equal<typeof num.value, number>>,
  Expect<Equal<typeof num.set, React.Dispatch<React.SetStateAction<number>>>>,
];
