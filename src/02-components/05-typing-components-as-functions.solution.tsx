import React from "react";

interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button: React.FC<Props> = (props: Props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
