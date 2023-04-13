import { ForwardedRef, forwardRef } from "react";

type Props<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

// declare module "react" {
//   function forwardRef<T, P = {}>(
//     render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
//   ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
// }

export const Table = forwardRef(
  <T,>(props: Props<T>, ref: ForwardedRef<any>) => {
    return null;
  },
);

const Parent = () => {
  return (
    <Table
      data={["123"]}
      renderRow={(row) => {
        return <div>123</div>;
      }}
    ></Table>
  );
};
