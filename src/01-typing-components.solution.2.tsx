import React from "react";

type Props = {
  className: string;
};

export const Button = (props: Props) => {
  return <button className={props.className}></button>;
};
