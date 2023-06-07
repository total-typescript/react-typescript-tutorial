import { useEffect, useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type State = "loading" | "loaded" | "error";

const fetchVideo = (src: string, signal: AbortSignal) => {
  return fetch(src, {
    signal,
  }).then((response) => response.blob());
};

const appendVideoToDomAndPlay = (blob: Blob) => {
  const video = document.createElement("video");
  video.src = URL.createObjectURL(blob);
  video.play();
};

export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    setState("loading");

    let cancelled = false;

    const abortController = new AbortController();

    fetchVideo(src, abortController.signal)
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
      abortController.abort();
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
