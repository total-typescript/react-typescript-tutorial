import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(
    () =>
      setTimeout(() => {
        console.log("Done!");
      }, timerMs),
    [timerMs],
  );
};
