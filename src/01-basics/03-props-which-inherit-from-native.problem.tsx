import React from "react";

export const Button = ({
  onClick,
  className,
  children,
  ...rest
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <button {...rest} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
