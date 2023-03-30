import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Done!");
    }, timerMs);

    return () => clearTimeout(timer);
  }, [timerMs]);
};
