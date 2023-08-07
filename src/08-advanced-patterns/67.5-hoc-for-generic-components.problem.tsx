import { Router, useRouter } from "fake-external-lib";
import { Equal, Expect } from "../helpers/type-utils";

export const withRouter = <TProps,>(Component: React.ComponentType<TProps>) => {
  const NewComponent = (props: Omit<TProps, "router">) => {
    const router = useRouter();
    return <Component {...(props as TProps)} router={router} />;
  };

  NewComponent.displayName = `withRouter(${Component.displayName})`;

  return NewComponent;
};

type TableProps<T> = {
  data: T[];
  renderRow: (item: T) => React.ReactNode;
  router: Router;
};

export const Table = <T,>(props: TableProps<T>) => {
  return <table />;
};

const WrappedTable = withRouter(Table);

<>
  {/* @ts-expect-error router is required! */}
  <Table
    data={[1, 2, 3]}
    renderRow={(row) => {
      type test = Expect<Equal<typeof row, number>>;
      return <tr />;
    }}
  />

  <WrappedTable
    data={[1, 2, 3]}
    renderRow={(row) => {
      type test = Expect<Equal<typeof row, number>>;
      return <tr />;
    }}
  />

  <WrappedTable
    data={[1, 2, 3]}
    renderRow={(row) => {
      type test = Expect<Equal<typeof row, number>>;
      return <tr />;
    }}
  />
</>;
