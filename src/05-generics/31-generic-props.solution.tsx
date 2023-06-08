import { ReactNode } from "react";
import { Equal, Expect } from "../helpers/type-utils";

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

/**
 * The solution is to add a type argument to the function, then
 * use that type argument in the type of the `rows` prop and the
 * `renderRow` function.
 */
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

const data = [
  {
    id: 1,
    name: "John",
  },
];

export const Parent = () => {
  return (
    <div>
      <Table rows={data} renderRow={(row) => <td>{row.name}</td>} />
      <Table
        rows={data}
        renderRow={(row) => {
          type test = Expect<Equal<typeof row, { id: number; name: string }>>;
          return (
            <td>
              {
                // @ts-expect-error
                row.doesNotExist
              }
            </td>
          );
        }}
      ></Table>
    </div>
  );
};
