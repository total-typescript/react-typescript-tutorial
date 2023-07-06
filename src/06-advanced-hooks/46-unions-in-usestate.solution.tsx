import { useEffect, useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";
import { appendVideoToDomAndPlay, fetchVideo } from "fake-external-lib";

type State = "loading" | "loaded" | "error";

export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    setState("loading");

    let cancelled = false;

    fetchVideo(src)
      .then((blob) => {
        if (cancelled) {
          return;
        }

        appendVideoToDomAndPlay(blob);

        setState("loaded");
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }
        setState("error");
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  // @ts-expect-error
  if (state === "does-not-exist") {
  }

  if (state === "loading") {
    return "loading...";
  }

  if (state === "loaded") {
    return "loaded";
  }

  if (state === "error") {
    return "Error!";
  }

  // state should equal never! Because we've covered all the cases
  type test = Expect<Equal<typeof state, never>>;
};
