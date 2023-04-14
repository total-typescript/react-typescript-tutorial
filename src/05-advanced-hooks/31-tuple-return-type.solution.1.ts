import { useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

export const useId = (defaultId: string) => {
  const [id, setId] = useState(defaultId);

  return [id, setId] as const;
};

const [id, setId] = useId("1");

type tests = [
  Expect<Equal<typeof id, string>>,
  Expect<Equal<typeof setId, React.Dispatch<React.SetStateAction<string>>>>,
];
