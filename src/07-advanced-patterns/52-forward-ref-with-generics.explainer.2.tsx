import { ForwardedRef, forwardRef } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

/**
 * It even works across module boundaries!
 *
 * Try uncommenting the declare module section in
 * explainer.1.tsx, and watch the error below go away.
 */
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
