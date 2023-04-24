import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Done!");
    }, timerMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [timerMs]);
};
