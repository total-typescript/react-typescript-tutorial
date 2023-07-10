import { appendVideoToDomAndPlay, fetchVideo } from "fake-external-lib";
import { useEffect, useState } from "react";

/**
 * Here, we're doing the same trick as before - using a state
 * variable to track the status of the video loading.
 *
 * But this time, we're storing it an object, with an extra
 * property for the error.
 *
 * This could be improved - we should only be allowed to specify
 * the error property when the status is "error".
 *
 * 1. Change the State interface so that the error property is only
 * allowed when the status is "error".
 */

type Status = "loading" | "loaded" | "error";

interface State {
  status: Status;
  error?: Error;
}

export const useLoadAsyncVideo = (src: string) => {
  const [state, setState] = useState<State>({
    status: "loading",
  });

  useEffect(() => {
    setState({ status: "loading" });

    let cancelled = false;

    fetchVideo(src)
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
    };
  }, [src]);

  // @ts-expect-error
  setState({ status: "error" });

  // @ts-expect-error
  setState({ status: "loading", error: new Error("error") });

  // @ts-expect-error
  setState({ status: "loaded", error: new Error("error") });
};
