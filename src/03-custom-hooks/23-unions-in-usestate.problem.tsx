import { useEffect, useState } from "react";

type State =
  | {
      status: "loading";
    }
  | {
      status: "loaded";
    }
  | {
      status: "error";
      error: Error;
    };

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
  const [state, setState] = useState<State>({
    status: "loading",
  });

  useEffect(() => {
    setState({ status: "loading" });

    let cancelled = false;

    const abortController = new AbortController();

    fetchVideo(src, abortController.signal)
      .then((blob) => {
        if (cancelled) {
          return;
        }

        appendVideoToDomAndPlay(blob);

        setState({ status: "loaded" });
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }
        setState({ status: "error", error });
      });

    return () => {
      cancelled = true;
      abortController.abort();
    };
  }, [src]);
};
