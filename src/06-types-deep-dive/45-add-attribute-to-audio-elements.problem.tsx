declare global {
  namespace React {
    interface AudioHTMLAttributes<T> {
      audioOnlyAttr?: string;
    }
  }
}

export const example1 = <audio audioOnlyAttr="awdawd"></audio>;

// @ts-expect-error
export const example2 = <span audioOnlyAttr="awdawd"></span>;
