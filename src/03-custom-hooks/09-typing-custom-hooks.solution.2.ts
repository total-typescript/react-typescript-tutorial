import { useState } from "react";
import { Equal, Expect } from "./helpers/type-utils";

export const useId = (defaultId: string): string => {
  const [id] = useState(defaultId);

  return id;
};

type tests = [Expect<Equal<typeof useId, (defaultId: string) => string>>];
