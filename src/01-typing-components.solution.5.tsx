import React from "react";

type ButtonComponent = (props: { className: string }) => JSX.Element;

export const Button: ButtonComponent = ({ className }) => {
  return <button className={className}></button>;
};
