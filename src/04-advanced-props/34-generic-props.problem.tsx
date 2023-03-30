import { Key, ReactNode } from "react";

interface TableProps {
  rows: any[];
  key: string;
  renderRow: (row: any) => ReactNode;
}

export const Table = (props: TableProps) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row[props.key]}>{props.renderRow(row)}</tr>
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
