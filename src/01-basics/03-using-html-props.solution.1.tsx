import React, { ComponentProps } from "react";

export const Button = ({
  onClick,
  className,
  children,
  ...rest
}: {
  className: string;
  children: React.ReactNode;
} & ComponentProps<"button">) => {
  return (
    <button {...rest} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
