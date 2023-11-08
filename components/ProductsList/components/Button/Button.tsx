import React, { ReactNode } from "react";

const Button = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[50px] h-[50px]  bg-white flex justify-center items-center btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
