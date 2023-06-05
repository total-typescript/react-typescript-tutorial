import { Equal, Expect } from "../helpers/type-utils";

interface TableProps {
  renderRow: React.FC<number>;
}

const Table = (props: TableProps) => {
  return <div>{[0, 1, 3].map(props.renderRow)}</div>;
};

export const Parent = () => {
  return (
    <>
      <Table
        renderRow={(index) => {
          type test = Expect<Equal<typeof index, number>>;
          return <div key={index}>{index}</div>;
        }}
      />
      <Table
        renderRow={(index) => {
          return null;
        }}
      />
      <Table
        // @ts-expect-error
        renderRow={<div></div>}
      />
      <Table
        // React.FC doesn't quite work here, because you
        // can't return numbers from an FC
        renderRow={(index) => {
          return index;
        }}
      />
    </>
  );
};
