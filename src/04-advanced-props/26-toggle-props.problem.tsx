/**
 * In this exercise, we've got an EmbeddedPlayground component that can either
 * use Stackblitz or CodeSandbox.
 *
 * We want to make sure that if useStackblitz is true, then stackblitzId is
 * required. If useStackblitz is false (or not specified), then codeSandboxId
 * is required.
 *
 * 1. Rewrite the EmbeddedPlaygroundProps type so that it enforces this.
 *
 * Hint - you'll need a discriminated union!
 */

type EmbeddedPlaygroundProps = {
  useStackblitz?: boolean;
  stackblitzId?: string;
  codeSandboxId?: string;
};

const EmbeddedPlayground = (props: EmbeddedPlaygroundProps) => {
  if (props.useStackblitz) {
    return (
      <iframe
        src={`https://stackblitz.com/edit/${props.stackblitzId}?embed=1`}
      />
    );
  }

  return <iframe src={`https://codesandbox.io/embed/${props.codeSandboxId}`} />;
};

<>
  <EmbeddedPlayground useStackblitz stackblitzId="my-stackblitz-id" />
  <EmbeddedPlayground codeSandboxId="my-codesandbox-id" />

  <EmbeddedPlayground
    useStackblitz
    // @ts-expect-error
    codeSandboxId="my-codesandbox-id"
  />

  {/* @ts-expect-error */}
  <EmbeddedPlayground stackblitzId="my-stackblitz-id" />
</>;
