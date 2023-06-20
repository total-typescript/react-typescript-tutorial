const classNamesMap = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-200 text-black",
  success: "bg-green-500 text-white",
};

/**
 * By using 'typeof' and 'keyof', we can _derive_ the type of
 * variant from the classNamesMap object.
 *
 * 1. Try adding a new key to classNamesMap, and see how the
 * type of variant automatically updates.
 */
type ButtonProps = {
  variant: keyof typeof classNamesMap;
};

export const Button = (props: ButtonProps) => {
  return <button className={classNamesMap[props.variant]}>Click me</button>;
};

const Parent = () => {
  return (
    <>
      <Button variant="primary"></Button>
      <Button variant="secondary"></Button>
      <Button variant="success"></Button>

      {/* @ts-expect-error */}
      <Button variant="something"></Button>
      {/* @ts-expect-error */}
      <Button></Button>
    </>
  );
};
