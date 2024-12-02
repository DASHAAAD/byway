import React from 'react'

import style from './ButtonBlack.module.css'

interface ButtonBlackProps {
    text: string
    style?: React.CSSProperties
    label?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
    backgroundColor?: string
    className?: string
    width?: string

}


export const ButtonBlack = ({
    onClick, 
    ...props
}: ButtonBlackProps) => {
    return (
        <button 
        className={style.button}
        onClick={onClick}
        {...props}
        >{props.text}</button>
    )
}

export default ButtonBlack