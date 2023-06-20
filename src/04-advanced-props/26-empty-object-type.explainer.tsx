const Component = (props: { config: {} }) => {
  return <div />;
};

/**
 * Why can I pass _anything_ to config?
 */
<>
  <Component
    config={{
      foo: "bar",
      whatever: {},
    }}
  />
</>;
