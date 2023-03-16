import { useEffect, useRef } from "react";

const id = useRef();

useEffect(() => {
  id.current = "Random value!";
}, []);

export const Component = () => {
  return <div></div>;
};
