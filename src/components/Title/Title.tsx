import React, { FC } from "react";
interface Type {
  text: string;
  className?: string;
}

export const Title: FC<Type> = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};
