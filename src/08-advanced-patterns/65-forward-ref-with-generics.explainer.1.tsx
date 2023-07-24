import { ForwardedRef, forwardRef, useRef } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

/**
 * Try uncommenting the following code. You'll see that the type of the `row`
 * prop is inferred to be `string`.
 *
 * This suggestion is from Stefan Baumgartner:
 *
 * https://fettblog.eu/typescript-react-generic-forward-refs/#option-3%3A-augment-forwardref
 */

// declare module "react" {
//   function forwardRef<T, P = {}>(
//     render: (props: P, ref: React.Ref<T>) => React.ReactNode,
//   ): (props: P & React.RefAttributes<T>) => React.ReactNode;
// }

/**
 * By ditching defaultProps and propTypes on the type passed ro render,
 * we can make use of something called 'higher order function type
 * inference':
 *
 * https://github.com/microsoft/TypeScript/pull/30215
 *
 * By doing it this way, we preserve the generic context of the function
 * being passed in.
 */
export const Table = <T,>(
  props: Props<T>,
  ref: ForwardedRef<HTMLTableElement>,
) => {
  return <table ref={ref} />;
};

const ForwardReffedTable = forwardRef(Table);

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
