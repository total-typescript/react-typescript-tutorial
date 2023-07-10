import { DependencyList, useMemo, useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

const useCustomState = <TValue>(initial: TValue) => {
  const [value, set] = useState<TValue>(initial);

  return {
    value,
    set,
    /**
     * We can use a generic _inline_ here to ensure
     * this all still works.
     */
    useComputed: <TComputed>(
      factory: (value: TValue) => TComputed,
      deps?: DependencyList,
    ) => {
      return useMemo(() => {
        return factory(value);
      }, [value, ...(deps || [])]);
    },
  };
};

const Component = () => {
  const arrayOfNums = useCustomState([1, 2, 3, 4, 5, 6, 7, 8]);

  const reversedAsString = arrayOfNums.useComputed((nums) =>
    Array.from(nums).reverse().map(String),
  );

  type test = Expect<Equal<typeof reversedAsString, string[]>>;
};
