import { Equal, Expect } from "../helpers/type-utils";

/**
 * The errors are happening because the dev didn't understand what
 * React.ReactNode was for.
 *
 * By changing it to a function which returns a React.ReactNode,
 * we can fix the errors.
 */

interface TableProps {
  renderRow: (rowIndex: number) => React.ReactNode;
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
        renderRow={(index) => {
          return index;
        }}
      />
    </>
  );
};
