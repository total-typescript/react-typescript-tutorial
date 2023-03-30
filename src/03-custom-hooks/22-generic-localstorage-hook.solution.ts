import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export const useLocalStorage = <T>(prefix: string) => {
  return {
    get: (key: string): T | null => {
      return JSON.parse(window.localStorage.getItem(prefix + key) || "null");
    },
    set: (key: string, value: T) => {
      window.localStorage.setItem(prefix + key, JSON.stringify(value));
    },
  };
};

const user = useLocalStorage<{ name: string }>("user");

it("Should let you set and get values", () => {
  user.set("matt", { name: "Matt" });

  const mattUser = user.get("matt");

  type tests = [Expect<Equal<typeof mattUser, { name: string } | null>>];
});

it("Should not let you set a value that is not the same type as the type argument passed", () => {
  user.set(
    "something",
    // @ts-expect-error
    {},
  );
});
