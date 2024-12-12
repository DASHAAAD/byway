import React from "react";
import style from '@/components/ButtonBlack/ButtonBlack.module.css'

interface ButtonBlackProps {
  text: string;
  style?: React.CSSProperties;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  backgroundColor?: string;
  width?: string;
}

export const Button = ({ onClick, ...props }: ButtonBlackProps) => {
  return (
    <button className={style.button} onClick={onClick} {...props} >
      {props.text}
    </button>
  );
};

export default Button;
