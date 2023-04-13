import React from "react";

export const Button: React.FC<{ className: string }> = ({ className }) => {
  return <button className={className}></button>;
};
