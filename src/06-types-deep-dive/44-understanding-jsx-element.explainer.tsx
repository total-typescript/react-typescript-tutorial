/**
 * 1. What's the difference between JSX.Element,
 * React.ReactNode and React.ReactElement?
 */
const Component = () => {
  //  ^?
  return <div>Hello world</div>;
};

type ClickMe = React.ReactElement;
type ClickMeToo = JSX.Element;
type ClickMeThree = React.ReactNode;

/**
 * 2. Why does this break?
 */

const Component2 = (): React.ReactNode => {
  return <div></div>;
};

<>
  <Component2 />
</>;

/**
 * 3. Why does this work?
 */

const Component3 = (): React.ReactElement => {
  return <div></div>;
};

<>
  <Component3 />
</>;
