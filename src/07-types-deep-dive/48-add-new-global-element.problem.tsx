<>
  <something id="123"></something>

  {/* @ts-expect-error */}
  <something></something>

  {/* @ts-expect-error */}
  <something id={123}></something>
</>;
