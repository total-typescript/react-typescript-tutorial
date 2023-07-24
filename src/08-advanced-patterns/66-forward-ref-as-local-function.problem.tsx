import { ForwardedRef, forwardRef, useRef } from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * Using the forward-ref-with-generics explanation as a guide,
 * give fixedForwardRef a type signature that allows it to
 * work with the example below.
 */
function fixedForwardRef(
  render: (props: any, ref: any) => any,
): (props: any) => any {
  return forwardRef(render) as any;
}

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
