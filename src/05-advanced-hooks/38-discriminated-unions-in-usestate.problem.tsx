import { useEffect, useState } from "react";

interface State {
  status: "loading" | "loaded" | "error";
  error?: Error;
}

const fetchVideo = (src: string) => {
  return fetch(src).then((response) => response.blob());
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

    fetchVideo(src)
      .then((blob) => {
        appendVideoToDomAndPlay(blob);

        setState({ status: "loaded" });
      })
      .catch((error) => {
        setState({ status: "error", error });
      });
  }, [src]);

  // @ts-expect-error
  setState({ status: "error" });

  // @ts-expect-error
  setState({ status: "loading", error: new Error("error") });

  // @ts-expect-error
  setState({ status: "loaded", error: new Error("error") });
};
