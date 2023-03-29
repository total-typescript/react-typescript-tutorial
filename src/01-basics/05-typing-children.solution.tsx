import React from "react";

export const Button = (props: {
  className: string;
  children: React.ReactNode;
}) => {
  return <button className={props.className}>{props.children}</button>;
};
