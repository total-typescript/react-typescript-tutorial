import { useEffect, useState } from "react";

export type Result<T> =
  | ["loading", undefined]
  | ["error", Error]
  | ["success", T];

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
