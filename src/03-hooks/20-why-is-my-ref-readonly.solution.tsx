import { useRef } from "react";

export const Component = () => {
  const firstOverload = useRef<string>("124123123");

  firstOverload.current = "123j12jhb123jhb";

  const secondOverload = useRef<string>(null);

  secondOverload.current = "Hello";

  const thirdOverload = useRef<string>();

  return null;
};
