import { useEffect, useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";
import { appendVideoToDomAndPlay, fetchVideo } from "fake-external-lib";

/**
 * This is a complex problem. We want to load a video from a URL and play it.
 * We also want to show a loading spinner while it loads, and an error message
 * if it fails.
 *
 * The code is handling this with several different states: "loading", "loaded",
 * and "error". But currently, the type of state is just string.
 *
 * 1. See if you can fix the errors below by making the type of state more specific.
 */
export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState("loading");

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
