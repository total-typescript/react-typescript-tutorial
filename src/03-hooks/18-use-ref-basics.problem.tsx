import { useEffect, useRef } from "react";

export const Component = () => {
  const id = useRef();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};
