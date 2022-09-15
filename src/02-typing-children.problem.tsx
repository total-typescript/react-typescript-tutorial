import React from "react";

export const Button = (props: { className: string; children: unknown }) => {
  return <button className={props.className}>{props.children}</button>;
};
