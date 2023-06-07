import { useQuery } from "@tanstack/react-query";
import { Equal, Expect } from "../helpers/type-utils";

interface User {
  fullName: string;
  job: string;
}

const getUser = async (): Promise<User> => {
  return Promise.resolve({
    fullName: "Matt Pocock",
    job: "Developer",
  });
};

/**
 * A bit of a hint to start with. useQuery has a LOT of overloads - but a lot
 * of them are disappearing in the next major version. The ones that'll be
 * sticking around are the first three.
 *
 * 1. How are the first three overloads different to the others? Put differently,
 * what's the thing that's similar about the first three that's different to
 * the other six?
 */

useQuery;
// ^ CMD+click on this to see the overloads

/**
 * 2. When you provide queryFn to useQuery, the type of query.data is inferred
 * as the return type of queryFn. Why is that?
 */
const query1 = useQuery({
  queryFn: getUser,
});

// Without initialData, the type of query1.data is User | undefined
type test1 = Expect<Equal<typeof query1.data, User | undefined>>;

/**
 * 3. When you provide initialData to useQuery, the type of query.data no longer
 * has undefined in it. Why is that?
 */
const query2 = useQuery({
  queryFn: getUser,
  initialData: {
    fullName: "",
    job: "",
  },
});

// WITH initialData, the type of query.data is just User
type test2 = Expect<Equal<typeof query2.data, User>>;
