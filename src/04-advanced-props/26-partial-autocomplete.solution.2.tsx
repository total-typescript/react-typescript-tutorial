const presetSizes = {
  xs: "0.5rem",
  sm: "1rem",
};

type Size = keyof typeof presetSizes;

type LooseAutocomplete<T> = T | (string & {});

type LooseSize = LooseAutocomplete<Size>;

export const Icon = (props: { size: LooseSize }) => {
  return (
    <div
      style={{
        width:
          props.size in presetSizes
            ? presetSizes[props.size as Size]
            : props.size,
      }}
    />
  );
};

<>
  <Icon size="sm"></Icon>
  <Icon size="xs"></Icon>
  <Icon size="10px"></Icon>
</>;
