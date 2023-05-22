import { ForwardedRef, forwardRef } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

// declare module "react" {
//   function forwardRef<T, P = {}>(
//     render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
//   ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
// }

export const Table = <T,>(props: Props<T>, ref: ForwardedRef<any>) => {
  return null;
};

const ForwardReffedTable = forwardRef(Table);

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
