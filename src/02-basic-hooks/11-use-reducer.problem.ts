import { useReducer } from "react";
import { Equal, Expect } from "../helpers/type-utils";

const reducer = (state: unknown, action: unknown) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.amount };
    case "subtract":
      return { count: state.count - action.amount };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

type tests = [Expect<Equal<typeof state.count, number>>];

dispatch({ type: "add", amount: 1 });

// @ts-expect-error
dispatch({ type: "subtract" });

// @ts-expect-error
dispatch({ type: "add" });

// @ts-expect-error
dispatch({ type: "subtract", amount: "123" });
