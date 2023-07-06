import { ReactNode } from "react";
import { Equal, Expect } from "../helpers/type-utils";

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const Table = <T,>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <tr>{props.renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

interface User {
  id: number;
  name: string;
  age: number;
}

<>
  <Table
    // @ts-expect-error rows should be User[]
    rows={[1, 2, 3]}
    renderRow={(row) => {
      type test = Expect<Equal<typeof row, User>>;
      return <td>{row.name}</td>;
    }}
  />
  <Table
    rows={[
      {
        id: 1,
        name: "John",
        age: 30,
      },
      {
        // @ts-expect-error id should be string
        id: "2",
        name: "Jane",
        age: 30,
      },
    ]}
    renderRow={(row) => {
      type test = Expect<Equal<typeof row, User>>;
      return <td>{row.name}</td>;
    }}
  ></Table>
</>;
