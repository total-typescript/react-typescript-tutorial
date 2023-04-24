import { useRef } from "react";

export const Component = () => {
  const ref = useRef<HTMLDivElement>();

  return <div ref={ref} />;
};
