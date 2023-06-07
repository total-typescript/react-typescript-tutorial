/**
 * Questions to answer:
 */

// 1. What is the React namespace?
type Example = React.ReactNode;
//             ^?

/**
 * 2a. Most namespaces can't be used as values. So how come
 * we can use React as a value here?
 */
const element = React.createElement("div");
//              ^?
