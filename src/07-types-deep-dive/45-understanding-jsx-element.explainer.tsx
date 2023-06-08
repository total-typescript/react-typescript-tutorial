/**
 * 1. What's the difference between JSX.Element,
 * React.ReactNode and React.ReactElement?
 *
 * CMD-click each of them to understand the difference.
 */

type ClickMe = React.ReactElement;
type ClickMeToo = JSX.Element;
type ClickMeThree = React.ReactNode;

/**
 * 2. What is the return type of this Component?
 */
const Component = () => {
  return <div>Hello world</div>;
};

/**
 * 3. Fun fact - this might break on your IDE! In
 * TypeScript 5.0, this wouldn't work. But in TypeScript
 * 5.1, it DOES work.
 *
 * If it's not working for you, try making your IDE use
 * the 'workspace' version of TypeScript.
 *
 * https://stackoverflow.com/questions/39668731/what-typescript-version-is-visual-studio-code-using-how-to-update-it
 */
const Component2 = (): React.ReactNode => {
  return <div></div>;
};

<>
  <Component2 />
</>;

/**
 * 4a. Why does this component NOT error...
 */
const Component3 = (): React.ReactElement => {
  return <div></div>;
};

<>
  <Component3 />
</>;

/**
 * 4b. ...but this one does?
 */
const Component4 = (): React.ReactElement => {
  return "hello!";
};
