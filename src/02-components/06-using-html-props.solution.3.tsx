import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  children: React.ReactNode;
}

export const Button = ({
  children,
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
