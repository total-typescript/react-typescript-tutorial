import React from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Let's take a look at Context in React. Here, we're creating
 * an abstraction that lets us create a context without having
 * to worry about the context value being null.
 *
 * As you can see, it exposes a special useContext hook and
 * a Provider component that we can use to wrap our application.
 *
 * But currently, it's not inferring any type information from our
 * createRequiredContext function.
 *
 * 1. See if you can fix it!
 */
const createRequiredContext = () => {
  const context = React.createContext(null);

  const useContext = () => {
    const contextValue = React.useContext(context);

    if (contextValue === null) {
      throw new Error("Context value is null");
    }

    return contextValue;
  };

  return [useContext, context.Provider];
};

const [useUser, UserProvider] = createRequiredContext<{
  name: string;
}>();

const [useTheme, ThemeProvider] = createRequiredContext<{
  primaryColor: string;
}>();

const Child = () => {
  const user = useUser();

  type test = Expect<
    Equal<
      typeof user,
      {
        name: string;
      }
    >
  >;

  const theme = useTheme();

  type test2 = Expect<
    Equal<
      typeof theme,
      {
        primaryColor: string;
      }
    >
  >;

  return null;
};

const Parent = () => {
  return (
    <>
      <UserProvider value={{ name: "Matt" }}>
        <ThemeProvider
          value={{
            primaryColor: "blue",
          }}
        >
          <Child />
        </ThemeProvider>
      </UserProvider>
    </>
  );
};
