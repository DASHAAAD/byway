import React, { FunctionComponent } from 'react'
import { ReactNode, CSSProperties } from 'react';

import styles from '../../components/buttonBlack/buttonBlack.module.css'
import { clsx } from 'clsx';

interface ButtonBlackProps {
    text?: string
    style?: React.CSSProperties
    label?: string;
    onClick?: () => void;
    backgroundColor?: string;

}

// const onClickButton = () => {
//     return (
//         console.log('типизация кнопки')
//     )
// }

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