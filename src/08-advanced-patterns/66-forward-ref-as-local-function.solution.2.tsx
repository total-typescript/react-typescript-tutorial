import { Equal, Expect } from "../helpers/type-utils";

import { ForwardedRef, forwardRef, useRef } from "react";

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export const Table = <T,>(
  props: Props<T>,
  ref: ForwardedRef<HTMLTableElement>,
) => {
  return <table ref={ref} />;
};

const ForwardReffedTable = fixedForwardRef(Table);

const Parent = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const wrongRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ForwardReffedTable
        ref={tableRef}
        data={["123"]}
        renderRow={(row) => {
          type test = Expect<Equal<typeof row, string>>;
          return <div>123</div>;
        }}
      />
      <ForwardReffedTable
        // @ts-expect-error
        ref={wrongRef}
        data={["123"]}
        renderRow={(row) => {
          return <div>123</div>;
        }}
      />
    </>
  );
};
