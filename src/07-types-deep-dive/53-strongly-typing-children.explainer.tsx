import { ReactNode } from "react";

/**
 * In this example we have a Select component. Through some magic, we're
 * attempting to strongly type the children of the Select component so
 * that you can only pass 'Option' elements to it.
 *
 * 1. Try to understand the type of OptionType. What's the __brand property
 * for?
 *
 * 2. There's an error happening at <Option /> below. Why is that?
 *
 * 3. Try changing <Option /> to {Option()}. This appears to work. Why?
 * And why is this NOT a good idea?
 *
 * 4. Is what we're attempting to do even possible?
 */

type OptionType = {
  __brand: "OPTION_TYPE";
} & ReactNode;

const Option = () => {
  return (<option></option>) as OptionType;
};

const Select = (props: { children: OptionType }) => {
  return <select>{props.children}</select>;
};

<Select>
  <Option />
</Select>;
