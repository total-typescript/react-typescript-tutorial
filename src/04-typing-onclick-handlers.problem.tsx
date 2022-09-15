import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

export const Button = ({ children, className, onChange }: ButtonProps) => {
  return (
    <button onChange={onChange} className={className}>
      {children}
    </button>
  );
};
