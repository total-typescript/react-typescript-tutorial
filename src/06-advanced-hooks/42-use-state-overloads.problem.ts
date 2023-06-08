import { useState } from "react";
import { Equal, Expect } from "../helpers/type-utils";

useState;
// ^^^^^ CMD-click to see the implementation of useState

/**
 * 1. Take a look at useState. You'll notice that it's composed of
 * two overloads.
 *
 * 2. Try to figure out what the difference is between the two overloads.
 *
 * 3. Below, there's a simple function that expects to behave like useState.
 * Try to write a set of function overloads that:
 *
 * - If it receives a string, returns a string
 * - If it receives NOTHING, returns a string | undefined
 *
 * HINT - you'll need to use the function keyword THREE times.
 */

function maybeReturnsString(defaultString?: string) {
  // If you pass a string, it always returns a string
  if (defaultString) {
    return defaultString;
  }

  // Otherwise, it MIGHT return a string or undefined
  return Math.random() > 0.5 ? "hello" : undefined;
}

const example1 = maybeReturnsString("hello");
const example2 = maybeReturnsString();

type tests = [
  Expect<Equal<typeof example1, string>>,
  Expect<Equal<typeof example2, string | undefined>>,
];
