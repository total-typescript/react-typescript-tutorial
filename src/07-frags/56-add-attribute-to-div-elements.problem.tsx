import { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        something?: string;
      };
    }
  }
}

export const example1 = <div something="awdawd"></div>;

// @ts-expect-error
export const example2 = <span something="awdawd"></span>;
