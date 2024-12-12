import React, { FC } from "react";
interface Type {
  children?: React.ReactNode;
  className?: string;
}

export const CardUser: FC<Type> = ({ children, className }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};
