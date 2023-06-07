import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";
import { z } from "zod";

export const useLocalStorage = <TSchema extends z.Schema>(
  prefix: string,
  schema: TSchema,
) => {
  const schemaOrNull = schema.nullable();
  return {
    get: (key: string): z.infer<TSchema> | null => {
      return schemaOrNull.parse(
        JSON.parse(window.localStorage.getItem(prefix + key) || "null"),
      );
    },
    set: (key: string, value: z.infer<TSchema>) => {
      window.localStorage.setItem(prefix + key, JSON.stringify(value));
    },
  };
};

const user = useLocalStorage("user", z.object({ name: z.string() }));

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
