import { useRef } from "react";

export const Component = () => {
  const ref = useRef<string>();

  ref.current = "Hello";

  return null;
};
