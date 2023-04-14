import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
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

type Props = ComponentProps<typeof Button>;
