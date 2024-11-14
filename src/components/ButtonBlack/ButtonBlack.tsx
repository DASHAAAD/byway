import React from 'react'

import style from './ButtonBlack.module.css'

interface ButtonBlackProps {
    text?: string
    style?: React.CSSProperties
    label?: string
    onClick?: () => void
    backgroundColor?: string
    className?: string
    width?: string

}


export const ButtonBlack = ({
    ...props
}: ButtonBlackProps) => {
    return (
        <button 
        className={style.button}
        {...props}
        >{props.text}</button>
    )
}

export default ButtonBlack