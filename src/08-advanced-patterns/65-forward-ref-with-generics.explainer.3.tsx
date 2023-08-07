import { Equal, Expect } from "../helpers/type-utils";

type TableProps<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

export const Table = <T,>(props: TableProps<T>) => {
  return null;
};

type FC<Props> = {
  (arg: Props): React.ReactNode;
  // Try uncommenting this - and it works!
  someOtherThing?: string;
};

const removeInference = <Props,>(component: FC<Props>) => {
  return component;
};

const TableWithoutInference = removeInference(Table);

const Parent = () => {
  return (
    <>
      <TableWithoutInference
        data={["123"]}
        renderRow={(row) => {
          // Without inference, this is 'unknown'
          type test = Expect<Equal<typeof row, string>>;
          return <div>123</div>;
        }}
      ></TableWithoutInference>

      <Table
        data={["123"]}
        renderRow={(row) => {
          // With inference, it's 'string'
          type test = Expect<Equal<typeof row, string>>;
          return <div>123</div>;
        }}
      ></Table>
    </>
  );
};
