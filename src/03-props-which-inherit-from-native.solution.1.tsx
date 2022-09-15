import React, { ButtonHTMLAttributes } from "react";

export const Button = ({
  onClick,
  className,
  children,
  ...rest
}: {
  className: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
