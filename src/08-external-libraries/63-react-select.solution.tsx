import ReactSelect, { GroupBase, Props } from "react-select";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * You need to mimic the exact type of the Props type exported by react-select.
 */
export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group>,
) => {
  return <ReactSelect {...props} />;
};

interface Option {
  id: number;
  label: string;
}

const guitarists: Option[] = [
  {
    id: 1,
    label: "Jimi Hendrix",
  },
  {
    id: 2,
    label: "Stevie Ray Vaughan",
  },
];

<>
  <Select
    options={guitarists}
    onChange={(option) => {
      // If isMulti is false, it should NOT be an array
      type test = Expect<Equal<typeof option, Option | null>>;
    }}
  />

  <Select
    options={guitarists}
    isMulti
    onChange={(option) => {
      // If isMulti is true, it should be an array
      type test = Expect<Equal<typeof option, readonly Option[]>>;
    }}
  />
</>;
