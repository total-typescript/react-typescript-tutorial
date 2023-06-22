const presetSizes = {
  xs: "0.5rem",
  sm: "1rem",
};

type Size = keyof typeof presetSizes;

/**
 * Oddly, this works. Forcing string to intersect with {} does SOMETHING
 * which makes TypeScript do what we want.
 *
 * Honestly, I'm not sure why this works. Some compiler-diving is required
 * to figure it out.
 */
type LooseSize = Size | (string & {});

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
