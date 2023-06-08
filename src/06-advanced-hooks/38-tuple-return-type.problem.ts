import { useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Here, we've got a hook that returns a tuple of [value, setValue].
 *
 * But if we hover over id and setId below, you'll see that they're
 * both inferred as string | React.Dispatch<React.SetStateAction<string>>,
 * which is not ideal.
 *
 * 1. Find a way to fix the errors below.
 */

export const useId = (defaultId: string) => {
  const [id, setId] = useState(defaultId);

  return [id, setId];
};

const [id, setId] = useId("1");

type tests = [
  Expect<Equal<typeof id, string>>,
  Expect<Equal<typeof setId, React.Dispatch<React.SetStateAction<string>>>>,
];
