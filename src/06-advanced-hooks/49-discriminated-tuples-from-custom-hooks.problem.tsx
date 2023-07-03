import { useEffect, useState } from "react";

export type Result<T> = [
  "loading" | "success" | "error",
  T | Error | undefined,
];

/**
 * Let's look at one more example of discriminated unions. This time, we're
 * going to use them to make the tuple return type of a hook smarter.
 *
 * 1. Change the Result type so that the second element is inferred
 * from narrowing the first.
 *
 * const [status, value] = useData<{ title: string }>(
 *   "https://jsonplaceholder.typicode.com/todos/1",
 * );
 *
 * When status is 'loading', value should be undefined.
 * When status is 'error', value should be an Error.
 * When status is 'success', value should be T.
 */
export const useData = <T,>(url: string): Result<T> => {
  const [result, setResult] = useState<Result<T>>(["loading", undefined]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResult(["success", data]))
      .catch((error) => setResult(["error", error]));
  }, [url]);

  return result;
};

const Component = () => {
  const [status, value] = useData<{ title: string }>(
    "https://jsonplaceholder.typicode.com/todos/1",
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {value.message}</div>;
  }

  return <div>{value.title}</div>;
};
