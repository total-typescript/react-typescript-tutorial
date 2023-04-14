import React from "react";

export const Button = ({ className }: { className: string }) => {
  return <button className={className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
