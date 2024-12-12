import React, { FC } from "react";
interface Type {
  text?: string;
  className?: string;
  style?: React.CSSProperties
}

export const Title: FC<Type> = ({ text, ...props}) => {
  return (<h4 {...props}>{text}</h4>);
};
