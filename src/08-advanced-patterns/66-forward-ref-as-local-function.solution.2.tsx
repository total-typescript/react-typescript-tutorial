import { Equal, Expect } from "../helpers/type-utils";

import { ForwardedRef, forwardRef } from "react";

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export const Table = <T,>(props: Props<T>, ref: ForwardedRef<any>) => {
  return null;
};

const ForwardReffedTable = fixedForwardRef(Table);

const Parent = () => {
  return (
    <ForwardReffedTable
      data={["123"]}
      renderRow={(row) => {
        type test = Expect<Equal<typeof row, string>>;
        return <div>123</div>;
      }}
    ></ForwardReffedTable>
  );
};
