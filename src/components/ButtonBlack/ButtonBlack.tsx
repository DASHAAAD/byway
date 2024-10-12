import React, { FunctionComponent } from 'react'
import { ReactNode, CSSProperties } from 'react';


interface ButtonBlackProps {
    text?: string
    style?: React.CSSProperties
    label?: string;
    onClick?: () => void;
    backgroundColor?: string;

}


export const ButtonBlack = ({
    ...props
}: ButtonBlackProps) => {
    return (
        <button 
        {...props}
        >{props.text}</button>
    )
}

export default ButtonBlack