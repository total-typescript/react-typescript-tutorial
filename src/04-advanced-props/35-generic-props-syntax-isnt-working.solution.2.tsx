import { Key, ReactNode } from "react";

interface TableProps<T> {
  rows: T[];
  key: keyof T;
  renderRow: (row: T) => ReactNode;
}

export const Table = <T extends unknown>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row[props.key] as Key}>{props.renderRow(row)}</tr>
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
      <Table
        rows={data}
        key="id"
        renderRow={(row) => <td>{row.name}</td>}
      ></Table>
      <Table
        rows={data}
        // @ts-expect-error
        key="doesNotExist"
        renderRow={(row) => <td>{row.name}</td>}
      ></Table>

      <Table
        rows={data}
        key="id"
        renderRow={(row) => {
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
