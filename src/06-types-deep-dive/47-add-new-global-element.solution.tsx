declare global {
  namespace JSX {
    interface IntrinsicElements {
      "something-solution": {
        id: string;
      };
    }
  }
}

<>
  <something-solution id="123"></something-solution>

  {/* @ts-expect-error */}
  <something-solution></something-solution>

  {/* @ts-expect-error */}
  <something-solution id={123}></something-solution>
</>;
