/**
 * Questions to answer:
 */

// 1. What is the React namespace?
// 1a. Why can it be accessed globally as a type?
type Example = React.ReactNode;
//             ^?

/**
 * 2a. Most namespaces can't be used as values. So how come
 * we can use React as a value here?
 *
 * HINT - we're adding LOTS of things to React's namespace in
 * later exercises, so make sure when you go-to-definition you
 * go to its original definition, in @types/react/index.d.ts.
 */
const element = React.createElement("div");
//              ^?

export {};
