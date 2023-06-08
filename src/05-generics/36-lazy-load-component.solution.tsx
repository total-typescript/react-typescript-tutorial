import { lazy, Suspense, useMemo } from "react";

type Props<C extends React.ComponentType<any>> = React.ComponentProps<C> & {
  loader: () => Promise<{ default: C }>;
};

function LazyLoad<C extends React.ComponentType<any>>({
  loader,
  ...props
}: Props<C>) {
  const LazyComponent = useMemo(() => lazy(loader), [loader]);

  return (
    <Suspense fallback={"Loading..."}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

<>
  <LazyLoad loader={() => import("fake-external-component")} id="123" />

  <LazyLoad
    loader={() => import("fake-external-component")}
    // @ts-expect-error number is not assignable to string
    id={123}
  />

  {/* @ts-expect-error id is missing! */}
  <LazyLoad loader={() => import("fake-external-component")} />
</>;
