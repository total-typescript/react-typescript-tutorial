import { useQuery } from "@tanstack/react-query";
import { useAuthToken } from "fake-external-lib";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Here, we're attempting to create a wrapper around react-query's useQuery
 * hook. We're doing that so we can inject the auth token into the queryFn
 * without having to pass it in every time.
 *
 * 1. Change the type definitions of useApi to fix the errors below. Where
 * possible, use types from react-query to describe the types of the
 * parameters.
 */
const useApi = (
  queryKey: any[],
  queryFn: (key: any, token: string) => Promise<any>,
) => {
  const token = useAuthToken();

  return useQuery({
    queryFn: (ctx) => queryFn(ctx, token),
    queryKey,
  });
};

// If you pass in an array of strings to queryFn, the type of ctx.queryKey
// should be string[]
const query = useApi(["users"], async (ctx, token) => {
  type tests = [
    Expect<Equal<typeof ctx.queryKey, string[]>>,
    Expect<Equal<typeof token, string>>,
  ];

  return Promise.resolve([
    {
      id: 1,
      name: "Matt Pocock",
    },
  ]);
});

// The type of query.data should be { id: number; name: string }[] | undefined
type tests = [
  Expect<Equal<typeof query.data, { id: number; name: string }[] | undefined>>,
];

// If you pass in an array of numbers in the queryKey, the type of ctx.queryKey
// should be number[]
useApi([1, 2], async (ctx, token) => {
  type tests = [
    Expect<Equal<typeof ctx.queryKey, number[]>>,
    Expect<Equal<typeof token, string>>,
  ];
});
