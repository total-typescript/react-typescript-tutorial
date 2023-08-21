import {
  useQuery,
  QueryKey,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { useAuthToken } from "fake-external-lib";
import { Equal, Expect } from "../helpers/type-utils";

const useApi = <TQueryKey extends QueryKey, TQueryFnData>(
  queryKey: TQueryKey,
  queryFn: (
    ctx: QueryFunctionContext<TQueryKey>,
    token: string,
  ) => Promise<TQueryFnData>,
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
