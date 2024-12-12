import React, { FC } from "react";
import style from "./button-styles.module.css";
interface ButtonBlackProps {
  text?: string;
  style?: React.CSSProperties;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  backgroundColor?: string;
  width?: string;
}

const Button: FC<ButtonBlackProps> = (item) => {
  return (
    <button onClick={item.onClick} className={style.button} {...item}>
      {item.text}
    </button>
  );
};
export default Button;
