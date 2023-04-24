declare global {
  namespace React {
    interface HTMLAttributes<T> {
      someCoolAttribute?: string;
    }
  }

  interface HTMLDivElement {
    someCoolAttribute?: string;
  }

  interface HTMLElement {
    someOtherAttribute?: string;
  }
}

export const example1 = (
  <div
    someCoolAttribute="awdawd"
    onChange={(e) => {
      console.log(e.currentTarget.someCoolAttribute);
    }}
  ></div>
);
