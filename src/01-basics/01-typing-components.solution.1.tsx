import React from "react";

interface Props {
  className: string;
}

export const Button = (props: Props) => {
  return <button className={props.className}></button>;
};
