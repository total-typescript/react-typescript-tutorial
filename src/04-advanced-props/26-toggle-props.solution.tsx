/**
 * This is just another kind of discriminated union - one based on a
 * boolean, not a string.
 *
 * Note that we use an optional property for the boolean in the
 * CodeSandbox version, because if the user doesn't specify it (passes
 * undefined), we want to default to it.
 */
type EmbeddedPlaygroundProps =
  | {
      useStackblitz: true;
      stackblitzId: string;
    }
  | {
      useStackblitz?: false;
      codeSandboxId: string;
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
</>;
